import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ShowDepartmentsComponent } from './show-departments/show-departments.component';


@NgModule({
  declarations: [ShowDepartmentsComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
