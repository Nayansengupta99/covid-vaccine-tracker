import { User } from './user';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {



  constructor(private http:HttpClient) { 

  }




  public doRegister( user: any){
    return this.http.post("https://covid-spring.herokuapp.com/user/register",user,{responseType:'text' as 'json'});
  }


  public getUsers(){
    return this.http.get("https://covid-spring.herokuapp.com/user/");
  }
  public getUserByName(name:string){
    return this.http.get("https://covid-spring.herokuapp.com/user/"+name)
  }
public deteleUserByName(id:number){
  return this.http.delete("https://covid-spring.herokuapp.com/user/delete/"+id,{responseType:'text' as 'json'})
}
public getDistricts(){
  return this.http.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/36");
}
public getVaccineCenterByDistrict(id:any,currentDate:any){
  return this.http.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict",{
   params:{
     'district_id':id,
     'date':currentDate
   }
  })
}
}
