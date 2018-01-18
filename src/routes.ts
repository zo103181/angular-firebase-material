import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './app/components/forgot-password/forgot-password.component';
import { HomeComponent } from './app/components/home/home.component';
import { ContactsComponent } from './app/components/contacts/contacts.component';
import { LoginComponent } from './app/components/login/login.component';
import { SettingsComponent } from './app/components/settings/settings.component';
import { SignupComponent } from './app/components/signup/signup.component';

import { AuthenticationGuard } from './app/services/authentication-guard.service';

export const appRoutes: Routes = [
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthenticationGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthenticationGuard] },
    { path: 'signup', component: SignupComponent },
    { path: '**' , redirectTo: 'login', pathMatch: 'full' }
];
