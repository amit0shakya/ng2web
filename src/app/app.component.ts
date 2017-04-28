import { Component } from '@angular/core';
import { Newpage } from './newpage';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
})

export class AppComponent  { 
    name = 'Angular';
    randno=1;
    
    GetRandNo(){
       this.randno=Math.round(Math.random()*200)+20;
    }
}
