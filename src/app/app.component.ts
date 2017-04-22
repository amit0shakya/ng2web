import {Component} from '@angular/core';
import {homepage} from './homepage/homepage'

@Component({
  selector: 'my-app',
  declarations:[homepage],
  template: `
    
    <homepage [user]="name" (myeve)="customeve($event)"></homepage>
    
    <div class="wrapper" style="border:3px solid #0f0;">
    
    -------------Root Component---------- <br><br>
    
    <input [(ngModel)]="name" #ctrl="ngModel" required>
    <p>Value: {{ name }}</p>
    
    
    <div *ngIf="eve" 
    style="width:100%; height:80px; background:red; color:#fff; text-align:center; line-height:80px; margin-bottom:15px">
    This div appear in root component due to fire Custom event from homepage component CHEERS! :D</div>
    
    
    <button (click)="setValue()" >Set value</button>
    
    </div>`
})

export class AppComponent {
  name: string = 'Root Angular';
  eve:Boolean=false;
  setValue() { this.name = 'Nancy'; }
  
  
  ///Custom event here
  customeve(e){
    this.eve=!this.eve;
  }
}