import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {Newpage} from './newpage';

const routes:Routes=[
    { path: '', redirectTo:'home', pathMatch:'full' },
    {path:'home', component:AppComponent},
    {path:'other', component:Newpage}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class Fuck{}