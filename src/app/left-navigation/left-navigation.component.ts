import {Component, HostListener} from '@angular/core';
import {PageSectionNames} from '../shared';
import {NavigationService} from "../shared/navigation.service";
import {debounceTime, Subject} from "rxjs";


@Component({
    selector: 'app-nav',
    templateUrl: './left-navigation.component.html',
})
export class LeftNavigationComponent {
    pageSectionNames = PageSectionNames;
    activeSection: string = this.pageSectionNames.Home;
    previouslyActiveSection: string = this.pageSectionNames.Home;
    private scrollSubject: Subject<void> = new Subject<void>();

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.scrollSubject.next();
    }

    constructor(private navigationService: NavigationService) {
        this.scrollSubject.pipe(debounceTime(100)).subscribe(() => {
            this.setActiveSection();
        });
    }

    scroll(element: string): void {
        this.navigationService.scrollToElement(element)
    }

    setActiveSection() {
        this.previouslyActiveSection = this.activeSection;
        const scrollPos: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const homeSection = document.getElementById(this.pageSectionNames.Home);
        const aboutMeSection = document.getElementById(this.pageSectionNames.AboutMe);
        const projectsSection = document.getElementById(this.pageSectionNames.Projects);
        const contactMeSection = document.getElementById(this.pageSectionNames.ContactMe);

        if (!homeSection || !aboutMeSection || !projectsSection || !contactMeSection) {
            return;
        }
        const homePos = 0;
        const aboutMePos: number = aboutMeSection.offsetTop;
        const projectsPos: number = projectsSection.offsetTop;
        const contactMePos: number = contactMeSection.offsetTop;

        const homeHeight: number = homeSection.offsetHeight;
        const aboutMeHeight: number = aboutMeSection.offsetHeight;
        const projectsHeight: number = projectsSection.offsetHeight;
        const contactMeHeight: number = contactMeSection.offsetHeight;

        if (this.isSectionActive(homePos, homeHeight, scrollPos)) {
            this.activeSection = this.pageSectionNames.Home;
        } else if (this.isSectionActive(aboutMePos, aboutMeHeight, scrollPos)) {
            this.activeSection = this.pageSectionNames.AboutMe;
        } else if (this.isSectionActive(projectsPos, projectsHeight, scrollPos)) {
            this.activeSection = this.pageSectionNames.Projects;
        } else if (this.isSectionActive(contactMePos, contactMeHeight, scrollPos)) {
            this.activeSection = this.pageSectionNames.ContactMe;
        } else {
            this.activeSection = this.previouslyActiveSection;
        }
    }

    private isSectionActive = (sectionPos: number, sectionHeight: number, scrollPos: number) => {
        return scrollPos + window.innerHeight >= sectionPos + sectionHeight / 2 && scrollPos < sectionPos + sectionHeight / 2;
    };

}
