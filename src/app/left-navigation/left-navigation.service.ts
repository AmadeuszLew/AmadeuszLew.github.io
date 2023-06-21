import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftNavigationService {
  private observer: IntersectionObserver;
  activeComponentId: string = '';

  constructor() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5, // Adjust as needed
    });
  }

  scroll(element: string) {
      let scrollTo=document.getElementById(element)
      scrollTo!.scrollIntoView({behavior: 'smooth'});
  }

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.activeComponentId = entry.target.id;
      }
    });
  };

  observeElement(element: HTMLElement) {
    this.observer.observe(element);
  }
}
