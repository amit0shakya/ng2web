import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Gallery} from './gallery/gallery';
import {AppComponent} from './app.component';

export const ROUTE_PROVIDER:Routes=[
{path:'gallery',component:Gallery}, {path:'',component:AppComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTE_PROVIDER) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}