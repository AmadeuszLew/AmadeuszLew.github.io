import {Component, AfterViewInit, inject} from '@angular/core';
import {PageSectionNames} from "../shared";
import {filter, first} from "rxjs";
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../shared/seo.service";
import {HOME_STRUCTURED_DATA} from "../shared/structured-data";

@Component({
    selector: 'app-body',
    templateUrl: './landing-page.component.html',
    standalone: false
})
export class LandingPageComponent implements AfterViewInit {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  PageSectionNames = PageSectionNames;

  constructor() {
    inject(SeoService).setPage({
      path: '/',
      titleKey: 'SEO.HOME_TITLE',
      descriptionKey: 'SEO.HOME_DESCRIPTION',
      jsonLd: HOME_STRUCTURED_DATA,
    });
  }

  ngAfterViewInit(): void {
    this.activatedRoute.fragment.pipe(
      first(),
      filter((fragment): fragment is string => !!fragment && fragment.trim().length > 0)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
}
