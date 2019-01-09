import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiBaseUrl} from '../services/apiBaseUrl.service';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  constructor(private apiService: ApiBaseUrl, private router: Router, private alertService: AlertService) {
    this.signInForm = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl
    });

  }

  signIn() {
    console.log('api');
    this.apiService.login(this.usernameControl.value, this.passwordControl.value).subscribe(data => {
      localStorage.setItem('authKey', data.idToken);
      this.router.navigate(['/dashboard']);
      this.alertService.success('Login Successfully');
    }, error => {
      console.log('error', error);
      this.alertService.error('Incorrect Email or Password');

    });

  }

  ngOnInit() {
  }

}
