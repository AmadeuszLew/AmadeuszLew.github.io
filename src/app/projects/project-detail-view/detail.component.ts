import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectDetail } from '../models/projectDetail.model';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  project!:ProjectDetail;
  viewFullSizePhoto: boolean[]=[];
  constructor(private readonly location: Location,
              private readonly route: ActivatedRoute,
              private readonly projectService:ProjectsService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.project=this.projectService.getSingleProject(id)!
    this.viewFullSizePhoto = Array(this.project.features.length).fill(false);
  }

  viewPhotoFunc(index:number) {
    this.viewFullSizePhoto[index] = !this.viewFullSizePhoto[index];
  }

  goBack():void{
    this.location.back();
  }
}
