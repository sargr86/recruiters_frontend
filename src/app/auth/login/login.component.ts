import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EMAIL_PATTERN} from '@shared/constants/app.config';
import {patternValidator} from '@shared/helpers/pattern-validator';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  subscriptions: Subscription[] = [];


  constructor(
    private  fb: FormBuilder,
    public auth: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, patternValidator(EMAIL_PATTERN)]
      }),
      password: ['', Validators.required],
    });

    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
  }

  login() {
    // if (this.loginForm.valid) {

    this.subscriptions.push(this.auth.login(this.loginForm.value).subscribe(dt => {

      // Saving token to browser local storage
      localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));

      // Gets current user data
      // this.auth.userData = jwtDecode(localStorage.getItem('token'));

      // Getting redirect url part matching current user role
      // const currentRole = this.auth.userData.role.name.toLowerCase();
      // const userType = USER_TYPES.find(d => d.role === currentRole);

      // Navigate to the dashboard page
      this.router.navigate([`/`]); // ${userType ? userType.label : 'admin'}

    }));
    // }

  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get pass(): AbstractControl {
    return this.loginForm.get('password');
  }

}
