import { Injectable,EventEmitter, Input, Output} from '@angular/core';
import {user} from '../users';
import {USERS} from '../user.data';

@Injectable()

export class UserService{
    testval="hello services"
    fun:any
    
    getuser():Promise<user[]> {
        console.log(USERS)
        return Promise.resolve(USERS);
        //return USERS;
    }
    
    constructor(){
    
    }

    configure(param){
        this.fun=param;
        this.setuser('amit',3)
    }
    
    setuser(name,id){
        //console.log(name+"<--Name SERVICES id-->"+id);
        console.log(this.fun);
       // _this.fun(name,id)
    }
}