import { Component } from '@angular/core';
import { webheader } from './header/webheader';

@Component({
  selector: 'homepage',
  templateUrl: './homeview.html',
  styleUrls:['./homepage.css'],
  directives: [ webheader ]
})

export class homepage { 
    username="hello Angular";
    
    user{
    name="angular"
    }
}