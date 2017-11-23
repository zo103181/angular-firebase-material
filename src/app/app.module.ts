// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Services
import { AuthenticationGuard } from './services/authentication-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { SidenavService } from './services/sidenav.service';

// Directives
import { EqualValidator } from './directives/equal-validator.directive';

// Routes
import { appRoutes } from '../routes';

// Environments
import { environment } from '../environments/environment';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Angular Material Components / Animations
// -- be sure to import the Angular Material modules 
// -- after Angular's BrowserModule, as the import order matters
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactsComponent } from './contacts/contacts.component';

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
    ContactsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
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
    SidenavService
  ],
  // the main application view, called the root component, that 
  // hosts all other app views. Only the root module should set this bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
