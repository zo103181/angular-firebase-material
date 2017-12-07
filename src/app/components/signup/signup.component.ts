import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../classes/user.class';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
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

  signUp() {
    if (this.user.password !== this.user.confirmPassword) {
      this.throwErrorMsg('Your passwords do not match!');
    } else {
      this.authService.signup({ email: this.user.email, password: this.user.password })
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
