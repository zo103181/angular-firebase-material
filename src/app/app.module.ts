// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Services
import { AuthenticationGuard } from './services/authentication-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { ContactService } from './services/contact.service';
import { SidenavService } from './services/sidenav.service';
import { SettingsService } from './services/settings.service';

// Directives
import { EqualValidator } from './directives/equal-validator.directive';

// Routes
import { appRoutes } from '../routes';

// Environments
import { environment } from '../environments/environment';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Angular Material Components / Animations
// -- be sure to import the Angular Material modules 
// -- after Angular's BrowserModule, as the import order matters
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    SignupComponent,
    EqualValidator,
    ForgotPasswordComponent,
    ContactsComponent,
    SettingsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  // creators of services that this module contributes to 
  // the global collection of services; 
  // they become accessible in all parts of the app.
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    ContactService,
    SidenavService,
    SettingsService
  ],
  // the main application view, called the root component, that 
  // hosts all other app views. Only the root module should set this bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
