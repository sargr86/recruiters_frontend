import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CounselorsService} from '@core/services/counselors.service';
import {RecruitersService} from '@core/services/recruiters.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {
  @Input() user;
  inviteUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private counselor: CounselorsService,
    private recruiter: RecruitersService,
    private toastr: ToastrService
  ) {
    this.inviteUserForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  invite() {
    this[this.user].invite().subscribe(() => {

    });
  }

}
