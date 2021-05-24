import { UserRegistrationService } from './../user-registration.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

import Cotter from "cotter";
import * as moment from 'moment';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  success = false;
  payload: any;
  payloadString: any;
  msg: any
  age:any;
  showAge:any;
  dateOfBirth: any;
  public user: User = new User(0, "", "", 0, "","");


  message: any;
  constructor(private service: UserRegistrationService) { }


 


  onHit(event: any) {
    console.log(event)
    this.msg = event.target.value + "is the value"
  
  }
  ngOnChanges() {
    this.calculateAge(this.dateOfBirth);
  }
  // public ageFromDateOfBirthday(dateOfBirth: any): number {
  //   const today = new Date();
  //   const birthDate = new Date(dateOfBirth);
  //   let a = today.getFullYear() - birthDate.getFullYear();
  //   const m = today.getMonth() - birthDate.getMonth();

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     a--;
  //   }
  //   this.age=a
  //   console.log(this.age)
    
  //   return a;
  // }

  public calculateAge(dateOfBirth: any){
    this.age= moment().diff(dateOfBirth, 'years');
  }


  ngOnInit() {
    // ⭐ Show Email Form
    // var cotter = new Cotter("47775a9e-f599-4999-b6ea-f901315ad31b");
    // cotter
    //   .signInWithLink()
    //   .showEmailForm() // 👈 Update type to PHONE
    //   .then((payload: object) => {
    //     this.success = true;
    //     this.payload = payload;
    //     this.payloadString = JSON.stringify(payload, null, 4);
    //   })
    //   .catch((err: any) => console.log(err));

  }


  district: string = "--Choose District--";
  vC:string="Vaccine Center"
  vaccineCentres: Array<any> = []
  districts: Array<any> = [
    { name: 'Alipurduar', vaccineCentres: ['Uttar Latabari RH -735217', 'Railway Jn - 736123', 'Alipurduar DH new', 'ALipurduar DH', 'Madarihat RH - 735220', 'Jasodanga RH - 736208'] },
    // {
    //   name: 'Bankura', vaccineCentres: []
    // },
    { name:'Birbhum',vaccineCentres:['Sainthia RH Polling -731234',

    'Md Bazar BPHC polling -731132',



    'Barachaturi BPHC -731103',

    'AHAMEDPUR RH -712501',

    'Mallarpur Hospital -731216',

    'Suri DH -731101',

    'MALLARPUR COVAXIN POLLING -731216',

    'District Hospital Suri -731101',

    'Suri DH Polling -731101',

    'SATPALSA COVISHIELD -731234',

    'Barachaturi BPHC Polling -731103',

    'Labpur Rural Hospital -731303',

    'Pangally PHC -503185',

    'CHAKMONDOLA COVAXIN POLLING -731223',

    'NABARUN -731224',

    'RAMPURHAT MED COLLEGE COVAXIN -731224',

    'MED COLLEGE COVAXIN POLLING -731224',

    'Bolpur SDH Polling -731204',

    'Bolpur BPHC Polling -731204',

    'Bolpur SDH -731204',

    'UPHC II Bolpur -731204',

    'Dubrajpur Rural Hospital -731124',

    'Nanoor BPHC Polling -731301',

    'Illambazar RH Polling -731214',

    'Illambazar Rural Hospital -731214',

    'Ilambazar RH COV -731214',

    'Rajnagar RH Polling -731130',

    'NALHATI RH -731220',

    'Nakrakonda BPHC Polling -731125',

    'Nakrakonda Rural Hospital -731125',

    'LOHAPUR COVAXIN POLLING -731237',

    'MURARAI COVAXIN POLLING -731219',

    'PAIKAR RH -731221',

    'Mahesaile RH -742201']},
    // { name:'Dakshin Dinajpur',vaccineCentres:[]},
    // { name:'Darjeeling',vaccineCentres:[]},
    // { name:'Hooghly',vaccineCentres:[]},
    // { name:'Howrah',vaccineCentres:[]},
    // { name:'Jalpaiguri',vaccineCentres:[]},
    // { name:'Jhargram',vaccineCentres:[]},
    // { name:"Kalimpong",vaccineCentres:[]},
    // { name:'Kolkata',vaccineCentres:[]},
    // { name:'Malda',vaccineCentres:[]},
    // { name:'Murshidabad',vaccineCentres:[]},
    // { name:'Nadia',vaccineCentres:[]},
    // { name:'North 24 Parganas',vaccineCentres:[]},
    // { name:'Paschim Medinipur',vaccineCentres:[]},
    // { name:'Paschim (West) Burdwan',vaccineCentres:[]},
    // { name:'Purba Burdwan',vaccineCentres:[]},
    // { name:'Purba Medinipur',vaccineCentres:[]},
    // { name:'South 24 Parganas',vaccineCentres:[]},
    // { name:'Uttar Dinajpur',vaccineCentres:[]},
    // { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
    // { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
    // { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
    // { name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
  ];
  changeDistrict(dist: any) {
    this.vaccineCentres = this.districts.find((d: any) => d.name == dist.target.value).vaccineCentres;
  }

  public registerNow() {
    this.user.district=this.district
    
    this.user.vaccineCenter=this.vC
    
    this.user.age=this.age
    
    let resp = this.service.doRegister(this.user);
    resp.subscribe((data) => this.message = data);
  }




}