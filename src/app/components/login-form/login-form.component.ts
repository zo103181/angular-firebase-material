import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../classes/user.class';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

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
    };
  }

  signIn() {
    this.errorMsg = null;
    this.authService.login({ email: this.user.email, password: this.user.password })
      .then(resolve => this.router.navigate(['home']))
      .catch(error => this.errorMsg = error.message);
  }

}
