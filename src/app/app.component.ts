import { Component } from '@angular/core';
import {ROUTE_PROVIDER} from './route';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <router-outlet></router-outlet>`
})
export class AppComponent  { name = 'Angular'; }
