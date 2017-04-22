import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homeview.html',
  styleUrls:['./homepage.css'],
})

export class homepage { 
    @Input() user="amit";
    @Output() myeve = new EventEmitter();
    
    fireCustomEvent(e){
        this.myeve.emit(e)
    }
}