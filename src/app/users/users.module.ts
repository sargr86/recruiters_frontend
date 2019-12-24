import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ShowUsersComponent} from './show-users/show-users.component';
import {SharedModule} from '@shared/shared.module';
import {ProfileComponent} from '@app/users/profile/profile.component';
import { InviteUsersComponent } from './invite-users/invite-users.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ShowUsersComponent,
    InviteUsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
