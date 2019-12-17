import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ShowUsersComponent} from './show-users/show-users.component';
import {AttachTerritoryComponent} from './attach-territory/attach-territory.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [ShowUsersComponent, AttachTerritoryComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
