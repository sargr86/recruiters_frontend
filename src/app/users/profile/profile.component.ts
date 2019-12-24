import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  userData;

  constructor(
    private fb: FormBuilder
  ) {
    this.userProfileForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      zip_code: ['', Validators.required],
      state: ['', Validators.required],
      county: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userData = jwtDecode(localStorage.getItem('token'));

    this.userProfileForm.patchValue(this.userData);
  }

  save() {

  }

}
