import { stringify } from '@angular/compiler/src/util';

export class User{
    userId:number=0
   name:string=""
   email:string=""
   age:number=0
   district:string=""
   covidCenter:string=""
    
    constructor(
        userId:number,
        name:string,
        email:string,
        age:number,
        district:string,
        covidCenter:string

    ){


    }
}