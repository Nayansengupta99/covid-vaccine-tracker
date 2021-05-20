import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {


  
  constructor(private http:HttpClient) { 

  }




  public doRegister( user: any){
    return this.http.post("https://register-ms-heroku.herokuapp.com/user/register",user,{responseType:'text' as 'json'});
  }


  public getUsers(){
    return this.http.get("https://register-ms-heroku.herokuapp.com/user/");
  }
  public getUserByName(name:string){
    return this.http.get("https://register-ms-heroku.herokuapp.com/user/"+name)
  }
public deteleUserByName(id:number){
  return this.http.delete("https://register-ms-heroku.herokuapp.com/user/delete/"+id,{responseType:'text' as 'json'})
}


}
