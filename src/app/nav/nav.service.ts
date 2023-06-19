import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService{
  scroll(element: string) {
      let scrollTo=document.getElementById(element)
      scrollTo!.scrollIntoView({behavior: 'smooth'});
  }
  getVisibleElement(): string {
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('aboutMe');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contactMe');

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.isElementInView(homeElement)) {
      return 'home';
    } else if (this.isElementInView(aboutElement)) {
      return 'aboutMe';
    } else if (this.isElementInView(projectsElement)) {
      return 'projects';
    } else if (this.isElementInView(contactElement)) {
      return 'contactMe';
    }

    return '';
  }

  private isElementInView(element: HTMLElement | null): boolean {
    if (!element) {
      return false;
    }

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
