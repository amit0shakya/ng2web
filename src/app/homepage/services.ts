import { Injectable } from '@angular/core';

@Injectable()

export class UserService{

    log(val:String){
        console.log(val);
    }
    
    constructor(){
    
    }
}