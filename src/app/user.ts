import { stringify } from '@angular/compiler/src/util';

export class User{
    userId:number=0
   name:string=""
   email:string=""
   exp:number=0
   domain:string=""
    
    constructor(
        userId:number,
        name:string,
        email:string,
        exp:number,
        domain:string

    ){


    }
}