import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../project.model';
import { ProjectDetail } from '../projectDetail.model';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project!:ProjectDetail;

  constructor(private route: ActivatedRoute,private projectService:ProjectsService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.project=this.projectService.getSingleProject(id)!
    console.log(this.project)
  }

}
