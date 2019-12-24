import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@core/modules/material.module';
import { InviteUserComponent } from './components/invite-user/invite-user.component';


@NgModule({
  declarations: [
  InviteUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    InviteUserComponent,
  ]
})
export class SharedModule {
}
