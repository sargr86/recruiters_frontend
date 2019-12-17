import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowUsersComponent } from './show-users/show-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ShowUsersComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
