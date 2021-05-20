import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"contact",component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }