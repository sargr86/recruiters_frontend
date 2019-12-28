import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowUsersComponent} from '@app/users/show-users/show-users.component';
import {ProfileComponent} from '@app/users/profile/profile.component';


const routes: Routes = [
  {
    path: 'show-users',
    component: ShowUsersComponent,
    data: {
      title: 'Users list'
    },
  },
  {
    path: 'profile', component: ProfileComponent,
    data: {
      title: 'Profile'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
