import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  show: boolean = false;
  constructor(private navService:NavService) {}
  scroll(el:string){
    this.navService.scroll(el)
    if(this.show){
      this.show=false;
    }
  }
  toggle(){
    this.show=!this.show
  }

}
