import { UserRegistrationService } from './../user-registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
users:any
message:any
  constructor(
    //private service:UserRegistrationService
    ) { }

  ngOnInit(): void {
    // let resp= this.service.getUsers();
    // resp.subscribe((data)=>this.users=data);
  }
// public deleteUserByName(id:number){
//   let resp=this.service.deteleUserByName(id);
//   resp.subscribe((data)=>this.message=data)
// }
}
