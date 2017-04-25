import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
    
import { AppRoutingModule } from './route';

import { AppComponent }  from './app.component';
import { Gallery }  from './gallery/gallery';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, Gallery],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[]
})

export class AppModule { }