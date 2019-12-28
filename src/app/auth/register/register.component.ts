import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formFields = {
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    folder: ['users'],
    profile_img: [''],
    company_id: ['', Validators.required],
    user_type: ['', Validators.required],
    zip_code: ['', Validators.required],
    assistance: ['', Validators.required],
    phone: ['', Validators.required]
  };
  dropzoneConfig = {};


  constructor(
    private fb: FormBuilder,
    public router: Router
  ) {
    this.registerForm = this.fb.group(this.formFields);
  }

  ngOnInit() {
  }


  register() {

  }

  removeImage() {

  }

  onAddedFile(e) {

  }


  /**
   * First name field control getter
   */
  get firstName() {
    return this.registerForm.get('first_name');
  }

  /**
   * Last name field control getter
   */
  get lastName(): AbstractControl {
    return this.registerForm.get('last_name');
  }

  /**
   * E-mail field getter
   */
  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  /**
   * Password field getter
   */
  get pass(): AbstractControl {
    return this.registerForm.get('password');
  }


}
