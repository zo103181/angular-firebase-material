import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**' , redirectTo: 'login', pathMatch: 'full' }
];