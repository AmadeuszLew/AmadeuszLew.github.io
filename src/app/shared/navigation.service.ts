import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  private positions = new Map<string, number>();

  scrollToElement(element: string): void {
    this.viewportScroller.scrollToAnchor(element);
  }

  navigateToElementOnMainPage(element: string): void {
    if (this.router.url !== '/' || !this.router.url.startsWith('/#')) {
      this.router.navigate([''], { fragment: element }).then(() => {
        this.scrollToElement(element);
      });
    } else {
      this.scrollToElement(element);
    }
  }
}
