import { Component } from '@angular/core';
import {ProjectsService} from './projects.service';
import {Project} from "./models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[]

  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.getProjectsList()
  }
}
