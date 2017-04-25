import { Component } from '@angular/core';
import { Newpage } from './newpage';

@Component({
  selector: 'my-app',
  template: `
  <div style="width:100%; height:100px; background-color:blue; color:#fff"> Navigation goes here </div>
  <h1>Hello Homepage {{name}}</h1><br> 
  <router-outlet></router-outlet>`
})

export class AppComponent  { name = 'Angular' }
