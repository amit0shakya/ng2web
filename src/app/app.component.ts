import { Component } from '@angular/core';
import { home } from './homepage/homepage';

@Component({
  selector: 'my-app',
  template: `
  <div><h1>Hello {{name}}</h1></div><br>
  <div *ngFor="let uname of users">{{uname}}</div>
  
  <br>
  <br>
  
  <homepage> </homepage>`,
})
export class AppComponent  { 
name = 'Angular'; 
users=['amit','sumit','rakesh'];





}
