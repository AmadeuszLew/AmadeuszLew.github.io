import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { OPENED_FROM_LANDING_STATE } from "../project-navigation";

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    standalone: false
})
export class ProjectsListComponent{
  @Input() projects: Project[];

  readonly openedFromLandingState = { [OPENED_FROM_LANDING_STATE]: true };
}
