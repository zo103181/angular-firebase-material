import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthenticationService } from '../../services/authentication.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatDrawer;
  user: Observable<firebase.User>;

  constructor(
    private authService: AuthenticationService, 
    private sidenavService: SidenavService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.user = this.authService.authUser();
  }

  logOut() {
    this.authService.logout()
      .then(resolve => {
        this.sidenavService.close();
        this.router.navigate(['login']);
      });
  }
}
