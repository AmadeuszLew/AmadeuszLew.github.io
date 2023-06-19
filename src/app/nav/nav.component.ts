import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  activeElement: string;

  constructor(private navService:NavService) { }


  scroll(el:string){
    this.activeElement = el;
    this.navService.scroll(el)
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.activeElement = this.navService.getVisibleElement();
  }

}
