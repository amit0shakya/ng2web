import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { homepage } from './homepage/homepage';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, homepage],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
