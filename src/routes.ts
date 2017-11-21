import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';

import { AuthenticationGuard } from './app/services/authentication-guard.service';

export const appRoutes: Routes = [
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**' , redirectTo: 'login', pathMatch: 'full' }
];