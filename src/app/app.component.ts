import { Component } from '@angular/core';
import { home } from './homepage/homepage';
import { UserService } from './homepage/services';
import { USERS } from  './user.data';
import { user } from  './users';

@Component({
  selector: 'my-app',
  template: `
  --------- app component services ----------------
  <div><h1>Data Services</h1></div><br>
  <div *ngFor="let uname of userData">Name={{uname.name}}</div>
  <br>
  <br>
  
  <button (click)="getUsers()"> Show USERS</button>
  
  <homepage> </homepage>`,
  providers:[UserService]
})
export class AppComponent  { 
name = 'Angular'; 
userData:user[];
Suser:user;

    constructor(private services: UserService) { 
        services.configure(this.addValue);
    }
    
    addValue(username,id){
        console.log("addvalue() in app.component user>"+username+"  id>>"+id);
    }
    
    getUsers(): void {
        //console.log(this.services.getuser());
        this.services.getuser().then(userData => this.userData = userData);
    }

}
