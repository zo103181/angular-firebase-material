import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthenticationService } from '../../services/authentication.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  showToobarMenu(router: Router) {
    // router.url !== '/login' && router.url !== '/signup' && router.url !== '/forgot-password'
    switch (router.url) {
      case '/login':
      case '/signup':
      case '/forgot-password':
        return false;
      default:
        return true;
    }
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
