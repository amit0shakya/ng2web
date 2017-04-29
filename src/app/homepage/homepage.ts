import { Component } from '@angular/core';
import {UserService} from './services';


@Component({
  selector: 'homepage',
  templateUrl: './homeview.html',
  styleUrls:['./homepage.css'],
  providers:[UserService];
})

export class home  { 

    constructor(private userlog:UserService){
    
    
    }
    
    addval(param:String){
    this.userlog.log(param)
    }
    
    ngOnInit(){
    
    }
    
}