import { Component, HostListener } from '@angular/core';
import { PageSectionNames } from '../shared';
import {NavigationService} from "../shared/navigation.service";


@Component({
  selector: 'app-nav',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent {
  pageSectionNames = PageSectionNames;
  activeSection: string = this.pageSectionNames.Home;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.setActiveSection();
  }
  constructor(private navigationService:NavigationService) { }
  scroll(element: string) {
    this.navigationService.scroll(element)
  }

  setActiveSection() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const homePos = document.getElementById(this.pageSectionNames.Home)?.offsetTop || 0;
    const aboutPos = document.getElementById(this.pageSectionNames.AboutMe)?.offsetTop || 0;
    const projectsPos = document.getElementById(this.pageSectionNames.Projects)?.offsetTop || 0;
    const contactPos = document.getElementById(this.pageSectionNames.ContactMe)?.offsetTop || 0;

    scrollPos = scrollPos + 220;
    if (scrollPos >= homePos && scrollPos < aboutPos) {
      this.activeSection = this.pageSectionNames.Home;
    } else if (scrollPos >= aboutPos && scrollPos < projectsPos) {
      this.activeSection = this.pageSectionNames.AboutMe;
    } else if (scrollPos >= projectsPos && scrollPos < contactPos) {
      this.activeSection = this.pageSectionNames.Projects;
    } else if (scrollPos >= contactPos) {
      this.activeSection = this.pageSectionNames.ContactMe;
    } else {
      this.activeSection = '';
    }
  }

}
