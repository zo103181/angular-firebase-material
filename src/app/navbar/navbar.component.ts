import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthenticationService } from '../services/authentication.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(
    private authService: AuthenticationService, 
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
