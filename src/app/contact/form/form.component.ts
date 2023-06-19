import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms'
import { AlertsService } from 'src/app/shared/alert.service';
import { ContactPost } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() contactFormActive: boolean = false;
  disableButton:boolean=false;
  error=null;

  constructor(private http:HttpClient, private alertService:AlertsService) { }

  ngOnInit(): void {
    this.onInitCheck()
  }

  onSubmitForm(form:NgForm){
    this.disableSpamButtonFunc();
    this.onCreatePost(form.value)
  }
  //storing contact
  onCreatePost(post:ContactPost){
    this.http.post(
      'https://amadeuszportfolio-default-rtdb.europe-west1.firebasedatabase.app/contact.json',
      post
      ).subscribe(resData=>{
        console.log(resData);
        this.alertService.riseAlert('success','Thanks! Message sent')
      },error =>{
        this.alertService.riseAlert('error','An error occurred :C')
        console.log(error.message)
      });
  }

  //managing spam attempts by little
  disableSpamButtonFunc(){
    let spam=localStorage.getItem('Irregardless')
    if(spam !== null){//if there was item in local storage
      if (+spam>3){
        this.disableButton=true
        return
      }
      let number = +spam + 1
      localStorage.setItem('Irregardless',number.toString())
    }else{//if there was no item in local storage, set it
      localStorage.setItem('Irregardless','1')
    }
  }
  onInitCheck(){
    if(localStorage.getItem('Irregardless')!==null){
      if(Number(localStorage.getItem('Irregardless'))>=4){
        this.disableButton=true
      }
    }

  }
}
