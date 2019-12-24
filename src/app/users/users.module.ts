import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ShowUsersComponent} from './show-users/show-users.component';
import {AttachTerritoryComponent} from './attach-territory/attach-territory.component';
import {SharedModule} from '@shared/shared.module';
import { SaveUsersComponent } from './save-users/save-users.component';
import {ProfileComponent} from '@app/users/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ShowUsersComponent,
    AttachTerritoryComponent,
    SaveUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
