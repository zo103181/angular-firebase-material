import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email: string;
  password: string;
  errorMsg: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['home']))
      .catch(error => this.errorMsg = error.message);
  }
}
