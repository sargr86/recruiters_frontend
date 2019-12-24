import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InviteRecruiterComponent} from '@app/recruiters/invite-recruiter/invite-recruiter.component';


const routes: Routes = [
  {
    path: 'invite-recruiter',
    component: InviteRecruiterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersRoutingModule { }
