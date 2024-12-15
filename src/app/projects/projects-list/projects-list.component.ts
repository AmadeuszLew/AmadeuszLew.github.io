import { Component, inject, Input } from '@angular/core';
import { Project } from '../models/project.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
})
export class ProjectsListComponent{
  @Input() projects: Project[];

  private readonly router: Router = inject(Router);

  navigate(project: string):void{
    this.router.navigate([`/${project}`]);
  }
}
