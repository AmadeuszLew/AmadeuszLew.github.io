import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectDetail } from '../projectDetail.model';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project!:ProjectDetail;
  viewFullSizePhoto: boolean[]=[];
  constructor(private route: ActivatedRoute,private projectService:ProjectsService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.project=this.projectService.getSingleProject(id)!
     // Creates the array with inactive state initially for all category items.
    this.viewFullSizePhoto = Array(this.project.features.length).fill(false);
  }
  viewPhotoFunc(index:number) {
    this.viewFullSizePhoto[index] = !this.viewFullSizePhoto[index];
  }
}
