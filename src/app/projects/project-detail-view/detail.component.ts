import { Component, OnInit, HostListener } from '@angular/core';
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
   modalOpen = false;
  selectedImageIndex: number | null = null;

  constructor(private readonly location: Location,
              private readonly route: ActivatedRoute,
              private readonly projectService:ProjectsService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.project=this.projectService.getSingleProject(id)!
  }

  openImage(index: number) {
    this.selectedImageIndex = index;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedImageIndex = null;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.modalOpen) this.closeModal();
  }

  goBack():void{
    this.location.back();
  }
}
