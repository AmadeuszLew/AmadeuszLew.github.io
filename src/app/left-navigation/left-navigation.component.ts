import {Component, afterNextRender, inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TranslatePipe} from '@ngx-translate/core';
import {debounceTime, Subject} from 'rxjs';

import {PageSectionNames} from '../shared';
import {NavigationService} from '../shared/navigation.service';

interface NavDot {
    section: PageSectionNames;
    label: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './left-navigation.component.html',
    standalone: true,
    imports: [TranslatePipe],
    host: { '(window:scroll)': 'onWindowScroll()' },
})
export class LeftNavigationComponent {
    private readonly navigationService = inject(NavigationService);
    private readonly document = inject(DOCUMENT);
    private readonly scrollSubject = new Subject<void>();

    readonly activeSection = this.navigationService.activeSection;
    readonly dots: readonly NavDot[] = [
        { section: PageSectionNames.Home, label: 'BUTTON_HOME' },
        { section: PageSectionNames.AboutMe, label: 'LEFT_MENU_BUTTON_ABOUT' },
        { section: PageSectionNames.AiExpert, label: 'LEFT_MENU_BUTTON_AI' },
        { section: PageSectionNames.Projects, label: 'LEFT_MENU_BUTTON_PROJECTS' },
        { section: PageSectionNames.ContactMe, label: 'LEFT_MENU_BUTTON_CONTACT_ME' },
    ];

    constructor() {
        this.scrollSubject.pipe(debounceTime(100), takeUntilDestroyed()).subscribe(() => {
            this.setActiveSection();
        });
        // Returning to the landing page at scroll position 0 fires no scroll event.
        afterNextRender(() => this.setActiveSection());
    }

    onWindowScroll(): void {
        this.scrollSubject.next();
    }

    navigateTo(event: MouseEvent, section: PageSectionNames): void {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return; // Let the browser open the real href in a new tab/window.
        }
        event.preventDefault();
        this.navigationService.navigateToElementOnMainPage(section);
    }

    private setActiveSection(): void {
        const window = this.document.defaultView;
        const sections = this.dots
            .map((dot) => this.document.getElementById(dot.section))
            .filter((section): section is HTMLElement => section !== null);
        if (!window || sections.length === 0) {
            return;
        }
        const isScrolledToBottom = window.innerHeight + window.scrollY >= this.document.documentElement.scrollHeight - 2;
        // A section is current once its top passes the middle of the viewport; short final sections never get
        // there, so the bottom of the page always selects the last one.
        const viewportMiddle = window.innerHeight / 2;
        const active = isScrolledToBottom
            ? sections[sections.length - 1]
            : [...sections].reverse().find((section) => section.getBoundingClientRect().top <= viewportMiddle) ?? sections[0];

        this.navigationService.activeSection.set(active.id as PageSectionNames);
    }
}
