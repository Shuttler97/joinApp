import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiBaseUrl} from '../services/apiBaseUrl.service';
import {AlertService} from '../services/alert.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 @ViewChild('userName')userName: ElementRef;
 @ViewChild('emailAddress')emailField: ElementRef;
 @ViewChild('password')passwordField: ElementRef;
  signUpForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  constructor(private apiService: ApiBaseUrl, private router: Router, private alertService: AlertService) {
    this.signUpForm = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl
    });

  }

  ngOnInit() {
  }

  signUp() {
    console.log('up');
    const data = this.signUpForm.value;
    return this.apiService.signUp(data).subscribe(res => {
        console.log('success');
        this.alertService.success('SignUp Successfully');
        this.userName.nativeElement.value = '';
        this.passwordField.nativeElement.value = '';
        this.emailField.nativeElement.value = '';
      },
       error => {
      console.log(error);
        this.alertService.error(error.name);
         this.userName.nativeElement.value = '';
         this.passwordField.nativeElement.value = '';
         this.emailField.nativeElement.value = '';
      });
  }
}

