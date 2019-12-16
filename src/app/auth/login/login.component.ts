import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EMAIL_PATTERN} from '@shared/constants/app.config';
import {patternValidator} from '@shared/helpers/pattern-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private  fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, patternValidator(EMAIL_PATTERN)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  login() {

  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get pass(): AbstractControl {
    return this.loginForm.get('password');
  }

}
