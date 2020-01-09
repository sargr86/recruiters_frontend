import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StatesService} from '@core/services/states.service';
import {CountiesService} from '@core/services/counties.service';
import {State} from '@shared/models/State';
import {County} from '@shared/models/County';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  states: State[];
  counties: County[];
  selectedState: number;
  formFields = {
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    folder: ['users'],
    profile_img: [''],
    company_id: ['', Validators.required],
    state_id: ['', Validators.required],
    county_id: ['', Validators.required],
    user_type: ['', Validators.required],
    zip_code: ['', Validators.required],
    assistance: ['', Validators.required],
    phone: ['', Validators.required]
  };
  dropzoneConfig = {};


  constructor(
    private fb: FormBuilder,
    public router: Router,
    private statesService: StatesService,
    private countiesService: CountiesService,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group(this.formFields);

    this.statesService.get().subscribe((dt: State[]) => {
      this.states = dt;
    });

  }

  ngOnInit() {
  }


  register() {
    this.authService.register(this.registerForm.value).subscribe(dt => {

    });
  }

  removeImage() {

  }

  onAddedFile(e) {

  }

  changeState(e) {
    this.selectedState = e;
    this.countiesService.getByState(this.selectedState).subscribe((dt: County[]) => {
      this.counties = dt;
    });
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

  get stateId(): AbstractControl {
    return this.registerForm.get('state_id');
  }


}
