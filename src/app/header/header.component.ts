import { Component } from '@angular/core';
import { LeftNavigationService } from '../left-navigation/left-navigation.service';
import { PageSectionNames } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  show: boolean = false;
  PageSectionNames = PageSectionNames;
  constructor(private navService:LeftNavigationService) {}
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
