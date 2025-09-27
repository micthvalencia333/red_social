import { Routes } from '@angular/router';
import { Login } from './login/login';
import { dashboard } from './dashboard/dashboard';
import { Public } from './public/public';


export const routes: Routes = [
    { path: '', 
    component: Login },

    { 
    path: 'dashboard',
    component: dashboard}, 


    {
        path: 'public',
        component: Public},

];



