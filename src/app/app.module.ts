import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Injectable} from '@angular/core';

import { AppComponent }  from './app.component';

import { home } from './homepage/homepage';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,home ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
