import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounselorsRoutingModule } from './counselors-routing.module';
import { InviteCounselorComponent } from './invite-counselor/invite-counselor.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [InviteCounselorComponent],
  imports: [
    CommonModule,
    CounselorsRoutingModule,
    SharedModule
  ]
})
export class CounselorsModule { }
