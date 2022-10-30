import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private navService:NavService) { }

  scroll(el:string){
    this.navService.scroll(el)
  }
}
