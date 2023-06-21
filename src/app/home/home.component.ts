import { Component } from '@angular/core';
import { LeftNavigationService } from '../left-navigation/left-navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private navService:LeftNavigationService) { }

  scroll(el:string){
    this.navService.scroll(el)
  }
}
