import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private router: Router = inject(Router)

    scroll(element: string): void {
        const scrollTo = document.getElementById(element)
        scrollTo?.scrollIntoView({behavior: 'smooth'});
    }

    navigateToElementOnMainPage(element: string): void {
        if (this.router.url != '' || !this.router.url.startsWith('/#')) {
            this.router.navigate([''], {fragment: element})
                .then()
        } else {
            this.scroll(element)
        }
    }

}
