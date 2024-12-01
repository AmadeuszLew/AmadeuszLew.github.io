import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {DetailComponent} from './projects/project-detail-view/detail.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: ':id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
