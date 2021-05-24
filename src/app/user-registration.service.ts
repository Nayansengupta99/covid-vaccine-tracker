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
    return this.http.post("http://localhost:8080/user/register",user,{responseType:'text' as 'json'});
  }


  public getUsers(){
    return this.http.get("http://localhost:8080/user/");
  }
  public getUserByName(name:string){
    return this.http.get("http://localhost:8080/user/"+name)
  }
public deteleUserByName(id:number){
  return this.http.delete("http://localhost:8080/user/delete/"+id,{responseType:'text' as 'json'})
}


}
