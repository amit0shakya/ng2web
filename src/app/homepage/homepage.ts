import { Component } from '@angular/core';
import { UserService } from './services';


@Component({
  selector: 'homepage',
  templateUrl: './homeview.html',
  styleUrls:['./homepage.css'],
  providers:[UserService]
})

export class home  { 
    id:number;
    
    constructor(private service:UserService){
    
    }
    
    addval(param:String){
        this.id=Math.round(Math.random()*99)+1;
        this.service.setuser(param,this.id);
    }
    
    ngOnInit(){
    
    }
    
}