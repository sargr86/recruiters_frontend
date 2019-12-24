import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InviteCounselorComponent} from '@app/counselors/invite-counselor/invite-counselor.component';


const routes: Routes = [
  {
    path: 'invite-counselor',
    component: InviteCounselorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounselorsRoutingModule {
}
