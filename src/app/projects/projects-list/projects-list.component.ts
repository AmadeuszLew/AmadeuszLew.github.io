import { Component, inject, Input } from '@angular/core';
import { Project } from '../models/project.model';
import {Router} from "@angular/router";
import { OPENED_FROM_LANDING_STATE } from "../project-navigation";

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    standalone: false
})
export class ProjectsListComponent{
  @Input() projects: Project[];

  private readonly router: Router = inject(Router);

  navigate(project: string):void{
    this.router.navigate([`/${project}`], { state: { [OPENED_FROM_LANDING_STATE]: true } });
  }
}
