import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user.class';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  hide = true;
  errorMsg: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  signIn() {
    this.authService.login({ email: this.user.email, password: this.user.password })
      .then(resolve => this.router.navigate(['home']))
      .catch(error => this.errorMsg = error.message);
  }
}
