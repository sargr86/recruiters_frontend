import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecruitersRoutingModule} from './recruiters-routing.module';
import {InviteRecruiterComponent} from './invite-recruiter/invite-recruiter.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [InviteRecruiterComponent],
  imports: [
    CommonModule,
    RecruitersRoutingModule,
    SharedModule
  ]
})
export class RecruitersModule {
}
