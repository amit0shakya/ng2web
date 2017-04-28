import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule,JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { Newpage } from './newpage';
import { Indexpage } from './indexpage';
import {Product} from './product';

import { AppRouter } from './route';

@NgModule({
  imports:      [ BrowserModule, AppRouter, HttpModule, JsonpModule],
  declarations: [ AppComponent,Newpage,Indexpage,Product],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
