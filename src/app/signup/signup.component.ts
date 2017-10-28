import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  passwordConfirm: string;
  errorMsg: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    if (this.password !== this.passwordConfirm) {
      this.throwErrorMsg('Your passwords do not match!');
    } else {
      this.authService.signup({ email: this.email, password: this.password })
        .then(resolve => this.router.navigate(['home']))
        .catch(error => {
          this.throwErrorMsg(error.message);
        });
    }
  }

  throwErrorMsg(msg) { 
    return this.errorMsg = msg; 
  }
}
