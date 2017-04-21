import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { homepage } from './homepage/homepage';
import { webheader } from './homepage/header/webheader';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ homepage,webheader],
  bootstrap:    [ homepage ]
})

export class AppModule { }
