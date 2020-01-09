import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as jwtDecode from 'jwt-decode';
import {StatesService} from '@core/services/states.service';
import {CountiesService} from '@core/services/counties.service';
import {AuthService} from '@core/services/auth.service';
import {UsersService} from '@core/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  userData;
  states;
  counties;

  constructor(
    private fb: FormBuilder,
    private statesService: StatesService,
    private countiesService: CountiesService,
    private authService: AuthService,
    private usersService: UsersService
  ) {
    this.userProfileForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      zip_code: ['', Validators.required],
      state_id: ['', Validators.required],
      county_id: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userData = jwtDecode(localStorage.getItem('token'));

    this.statesService.get().subscribe(dt => {
      this.states = dt;
    });

    this.countiesService.get().subscribe(dt => {
      this.counties = dt;
    });

    this.usersService.getUserInfo(this.userData.email).subscribe(dt => {
      this.userData = dt;
      this.userProfileForm.patchValue(this.userData);
    });
  }

  save() {
    this.authService.update(this.userProfileForm.value).subscribe(() => {

    });
  }

}
