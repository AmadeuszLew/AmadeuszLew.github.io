import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { FormComponent } from './contact/form/form.component';
import { FormsModule } from '@angular/forms';
import { AlertsService } from './shared/alert.service';
import { DetailComponent } from './projects/project-detail-view/detail.component';
import { ProjectsService } from './projects/projects.service';
import { MatIconModule } from '@angular/material/icon';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { ProjectsListComponent } from "./projects/projects-list/projects-list.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LadingPageComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    LeftNavigationComponent,
    FormComponent,
    DetailComponent,
    ProjectsListComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [AlertsService,ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
