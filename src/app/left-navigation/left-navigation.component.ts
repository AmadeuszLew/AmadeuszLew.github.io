import { Component, ElementRef, OnInit } from '@angular/core';
import { PageSectionNames } from '../shared';
import {LeftNavigationService} from "./left-navigation.service";


@Component({
  selector: 'app-nav',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
  pageSectionNames = PageSectionNames;

  constructor(public leftNavigationService:LeftNavigationService, private elementRef: ElementRef) { }


  scroll(el:string){
    this.leftNavigationService.scroll(el)
  }
  ngOnInit(): void {
    const nativeElement = this.elementRef.nativeElement;
    this.leftNavigationService.observeElement(nativeElement);
  }

}
