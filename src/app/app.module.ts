// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Services
import { SidenavService } from './services/sidenav.service';

// Routes
import { appRoutes } from '../routes';

// Angular Material Components / Animations
// -- be sure to import the Angular Material modules 
// -- after Angular's BrowserModule, as the import order matters
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  // creators of services that this module contributes to 
  // the global collection of services; 
  // they become accessible in all parts of the app.
  providers: [
    SidenavService
  ],
  // the main application view, called the root component, that 
  // hosts all other app views. Only the root module should set this bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
