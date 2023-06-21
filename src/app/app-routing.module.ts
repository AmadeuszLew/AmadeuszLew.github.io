import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPage } from './lading-page/lading-page';
import { DetailComponent } from './projects/detail/detail.component';

const routes: Routes = [
  {path:'',component:LadingPage},
  {path:':id',component:DetailComponent}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
