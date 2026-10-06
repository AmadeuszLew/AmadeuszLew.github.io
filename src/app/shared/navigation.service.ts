import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { PageSectionNames } from './page.defs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  private readonly document = inject(DOCUMENT);
  private positions = new Map<string, number>();
  /** Landing-page section currently in view, kept up to date by the left navigation's scroll spy. */
  readonly activeSection = signal<PageSectionNames>(PageSectionNames.Home);

  scrollToElement(element: string): void {
    this.viewportScroller.scrollToAnchor(element);
  }

  navigateToElementOnMainPage(element: string): void {
    if (this.router.url !== '/' || !this.router.url.startsWith('/#')) {
      this.router.navigate([''], { fragment: element }).then(() => {
        this.scrollToElement(element);
        this.focusSection(element);
      });
    } else {
      this.scrollToElement(element);
      this.focusSection(element);
    }
  }

  /** Moves keyboard and screen-reader focus to the section the visitor just navigated to. */
  private focusSection(element: string): void {
    const section = this.document.getElementById(element);
    if (!section) {
      return;
    }
    if (!section.hasAttribute('tabindex')) {
      section.setAttribute('tabindex', '-1');
    }
    section.focus({ preventScroll: true });
  }
}
