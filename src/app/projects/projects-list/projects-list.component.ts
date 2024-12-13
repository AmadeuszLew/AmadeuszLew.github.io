import { Component, Input,  } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
})
export class ProjectsListComponent {
  @Input() projects: Project[];
}
