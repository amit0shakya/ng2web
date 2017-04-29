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
    
    track(){
    this.userlog.log()
    }
    
    ngOnInit(){
    
    }
    
}