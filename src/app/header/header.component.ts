import { Component } from '@angular/core';
import { NavigationService,  } from '../shared/navigation.service';
import { PageSectionNames } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  show = false;
  PageSectionNames = PageSectionNames;
  constructor(private navigationService:NavigationService) {}
  scroll(el:string){
    this.navigationService.scroll(el)
    if(this.show){
      this.show=false;
    }
  }
  toggle(){
    this.show=!this.show
  }

}
