import {Component, AfterViewInit, inject} from '@angular/core';
import {PageSectionNames} from "../shared";
import {filter, first} from "rxjs";
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements AfterViewInit {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  PageSectionNames = PageSectionNames;

  ngAfterViewInit(): void {
    this.activatedRoute.fragment.pipe(
      first(),
      filter((fragment): fragment is string => !!fragment && fragment.trim().length > 0)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
}
