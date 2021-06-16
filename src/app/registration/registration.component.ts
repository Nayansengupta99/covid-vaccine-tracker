import { UserRegistrationService } from './../user-registration.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
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
  age: any;
  showAge: any;
  dateOfBirth: any;
  public user: User = new User(0, "", "", 0, "", "");
  vaccineCenters: any
  id: any
  date: any
  state: Array<any> = []
  message: any;
  vC: string = ""
  district: string = "--Choose District--";

  constructor(private service: UserRegistrationService, private datePipe: DatePipe) { }
  response: any




  onHit(event: any) {
    console.log(event)
    this.msg = event.target.value + "is the value"

  }
  ngOnChanges() {
    this.calculateAge(this.dateOfBirth);



  }


  public calculateAge(dateOfBirth: any) {
    this.age = moment().diff(dateOfBirth, 'years');
  }


  ngOnInit() {

    this.service.getDistricts().subscribe(res => {

      this.response = res;
      console.log(res)

    });

    console.log();
  }





  displaySelectedDistrict(event: any) {
    console.log(event.target.value);
    this.id = event.target.value
    this.date = new Date();
    let latest_date = this.datePipe.transform(this.date, 'dd-MM-yyyy');
    console.log(this.date)
    this.service.getVaccineCenterByDistrict(this.id, latest_date).subscribe(res => {
      this.vaccineCenters = res;
      this.vaccineCenters = this.vaccineCenters.sessions

      //console.log(this.vacCen[0])
    });
  }
  public registerNow() {
    this.user.district = this.district

    this.user.vaccineCenter = this.vC

    this.user.age = this.age
    console.log( this.user.district)
    console.log(this.user.vaccineCenter)

    let resp = this.service.doRegister(this.user);
    resp.subscribe((data) => this.message = data);
  }

}