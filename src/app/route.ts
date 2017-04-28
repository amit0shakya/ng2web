import { NgModule ,ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Newpage} from './newpage';
import {Indexpage} from './indexpage';
import {Product} from './product';

export const routes:Routes=[
    { path: '', redirectTo:'home', pathMatch:'full' },
    {path:'home', component:Indexpage},
    {path:'about', component:Newpage},
    {path:'product/:id', component:Product}
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes)