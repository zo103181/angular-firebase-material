import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user.class';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user: User;
  errorMsg: string;
  resetSent: boolean;

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
    this.resetSent = false;
  }

  resetPassword() {
    this.authService.resetPassword(this.user.email)
      .then(() => {
        this.errorMsg = '';
        this.resetSent = true;
      })
      .catch(error => this.errorMsg = error.message);
  }

}
