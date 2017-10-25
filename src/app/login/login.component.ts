import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    if (this.email === 'email@example.com' && this.password === 'isvalid') {
      console.log('valid');
      this.router.navigate(['home'])
    } else {
      console.log('invalid');
    }
  }
}
