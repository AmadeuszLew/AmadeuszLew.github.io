import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private navigationService:NavigationService) {}

  scroll(element: string) {
    this.navigationService.scroll(element);
  }
}
