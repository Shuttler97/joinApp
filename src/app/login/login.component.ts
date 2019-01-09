import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSignUpForm = false;
  showSignInForm = false;

  constructor() {
  }


  ngOnInit() {
  }

  showSignUpDialog() {
    this.showSignUpForm = true;
    this.showSignInForm = false;
  }

  showSignInDialog() {
    this.showSignUpForm = false;
    this.showSignInForm = true;
  }

  }
