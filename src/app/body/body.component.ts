import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // updateList() {
  //   const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
  //     return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
  //   });
  
  //   document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
    
  //   document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
  // }
  
  // updateList();
  // window.addEventListener('scroll', () => {
  //     updateList();
  // })
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
