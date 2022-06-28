import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';
import {EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input()
  formData:ResumeFormData;

  // @Output()
  // editInfoEvent: EventEmitter<any>;

  constructor() { 
    //let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    //this.formData = JSON.parse(data);
  }

  ngOnInit(): void {
  }
  // editInfo():void{
  //   this.editInfoEvent.emit(false);
  // }

}
