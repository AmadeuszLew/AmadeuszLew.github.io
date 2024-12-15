import {Component} from '@angular/core';
import {NavigationService,} from '../shared/navigation.service';
import {PageSectionNames} from '../shared';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    show = false;
    PageSectionNames = PageSectionNames;

    constructor(private navigationService: NavigationService) {
    }

    navigateTo(el: string): void {
        this.navigationService.navigateToElementOnMainPage(el)
        this.show = false
    }

    hideIfExpanded():void{
      if(this.show) {
        this.toggle();
      }
    }

    toggle(): void {
        this.show = !this.show
    }

}
