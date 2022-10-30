import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService{
    scroll(element: string) {
        let scrollTo=document.getElementById(element)
        scrollTo!.scrollIntoView({behavior: 'smooth'});
      }
}