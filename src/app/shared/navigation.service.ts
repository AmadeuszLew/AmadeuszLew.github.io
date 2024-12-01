import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  scroll(element: string):void {
      const scrollTo=document.getElementById(element)
      scrollTo?.scrollIntoView({behavior: 'smooth'});
  }

}
