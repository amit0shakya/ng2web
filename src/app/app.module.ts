import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Newpage } from './newpage';

import { Fuck } from './route';

@NgModule({
  imports:      [ BrowserModule,Fuck ],
  declarations: [ AppComponent,Newpage ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
