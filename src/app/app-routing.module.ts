import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { DetailComponent } from './projects/project-detail-view/detail.component';

const routes: Routes = [
  {path:'',component:LadingPageComponent},
  {path:':id',component:DetailComponent}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
