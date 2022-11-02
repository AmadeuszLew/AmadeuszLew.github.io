import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DetailComponent } from './projects/detail/detail.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:':id',component:DetailComponent}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
