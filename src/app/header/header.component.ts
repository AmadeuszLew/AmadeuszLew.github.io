import { Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map } from 'rxjs';

import { NavigationService } from '../shared/navigation.service';
import { PageSectionNames } from '../shared';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

interface NavItem {
    section: PageSectionNames;
    label: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [RouterLink, TranslatePipe, LanguageSelectorComponent],
    host: {
        '(document:keydown.escape)': 'closeMenuOnEscape()',
        '(document:click)': 'closeMenuOnOutsideClick($event)',
    },
})
export class HeaderComponent {
    private readonly navigationService = inject(NavigationService);
    private readonly router = inject(Router);
    private readonly document = inject(DOCUMENT);
    /** The click that toggled the menu; it bubbles to document and must not count as an outside click. */
    private toggleClick: MouseEvent | null = null;

    readonly navItems: readonly NavItem[] = [
        { section: PageSectionNames.Home, label: 'BUTTON_HOME' },
        { section: PageSectionNames.AboutMe, label: 'BUTTON_ABOUT' },
        { section: PageSectionNames.AiExpert, label: 'BUTTON_AI' },
        { section: PageSectionNames.Projects, label: 'BUTTON_PROJECTS' },
        { section: PageSectionNames.ContactMe, label: 'BUTTON_CONTACT_ME' },
    ];
    readonly menuOpen = signal(false);
    readonly mobileMenuId = 'mobile-menu';

    private readonly isOnLandingPage = toSignal(
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map((event) => this.isLandingUrl(event.urlAfterRedirects)),
        ),
        { initialValue: this.isLandingUrl(this.router.url) },
    );

    // Every other route is a project detail page, which belongs to the Projects section.
    readonly activeSection = computed(() =>
        this.isOnLandingPage() ? this.navigationService.activeSection() : PageSectionNames.Projects,
    );

    navigateTo(event: MouseEvent, section: PageSectionNames): void {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return; // Let the browser open the real href in a new tab/window.
        }
        event.preventDefault();
        this.navigationService.navigateToElementOnMainPage(section);
        this.menuOpen.set(false);
    }

    desktopLinkClass(section: PageSectionNames): string {
        if (section === PageSectionNames.ContactMe) {
            return 'bg-theme px-6 font-bold hover:bg-theme/80';
        }
        return this.activeSection() === section ? 'text-selected-text' : 'hover:text-selected-text';
    }

    toggleMenu(event: MouseEvent): void {
        this.toggleClick = event;
        this.menuOpen.update((open) => !open);
    }

    closeMenu(): void {
        this.menuOpen.set(false);
    }

    closeMenuOnOutsideClick(event: MouseEvent): void {
        // Matched by event identity and DOM id rather than view queries: dev-server HMR can re-render the
        // template and leave queried element references pointing at detached nodes.
        const clickedInsideMenu = event.composedPath()
            .some((node) => node instanceof Element && node.id === this.mobileMenuId);
        const isToggleClick = event === this.toggleClick;
        this.toggleClick = null;
        if (this.menuOpen() && !isToggleClick && !clickedInsideMenu) {
            // Focus stays where the visitor clicked, unlike Escape.
            this.menuOpen.set(false);
        }
    }

    closeMenuOnEscape(): void {
        if (!this.menuOpen()) {
            return;
        }
        // The focused link is about to be removed from the DOM; hand focus back to the toggle.
        const focusWasInMenu = !!this.document.activeElement?.closest(`#${this.mobileMenuId}`);
        this.menuOpen.set(false);
        if (focusWasInMenu) {
            this.document.querySelector<HTMLElement>(`[aria-controls="${this.mobileMenuId}"]`)?.focus();
        }
    }

    private isLandingUrl(url: string): boolean {
        return this.router.parseUrl(url).root.children['primary'] === undefined;
    }
}
