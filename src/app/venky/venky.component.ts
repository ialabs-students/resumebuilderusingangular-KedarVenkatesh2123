import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-venky',
  templateUrl: './venky.component.html',
  styleUrls: ['./venky.component.css']
})
export class VenkyComponent implements OnInit {
  formData:ResumeFormData;
  showResume:boolean=false;


  constructor() { 
    this.formData={
      firstName:"",
      middleName:"",
      lastName:"",
      description1:"",
      email1:"",
      mobile1:"",
      dob1:"",
    gender1:"",
    fb1:"",
    li1:"",
    tw1:"",
    obj1:"",
    university11:"",
    yearofpassing11:"",
    percentage11:"",
    university21:"",
    yearofpassing21:"",
    percentage21:"",
    university31:"",
    yearofpassing31:"",
    percentage31:"",
    university41:"",
    yearofpassing41:"",
    percentage41:"",
    wor11:"",
    wor21:"",
    tech11:"",
    tech21:"",
    tech31:"",
    tech41:"",
    hob11:"",
    hob21:"",
    hob31:"",
    declaration1:"",
    }
  }

  ngOnInit(): void {
  }
  saveFormData(){
    console.log(this.formData);
    localStorage.setItem("formData",JSON.stringify(this.formData));
    this.showResume=true;
  }

}
