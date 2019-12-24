import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowUsersComponent} from '@app/users/show-users/show-users.component';
import {ProfileComponent} from '@app/users/profile/profile.component';


const routes: Routes = [
  {
    path: 'show-users',
    component: ShowUsersComponent
  },
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
