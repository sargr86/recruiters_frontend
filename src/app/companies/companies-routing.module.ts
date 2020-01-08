import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowDepartmentsComponent} from '@app/companies/show-departments/show-departments.component';


const routes: Routes = [
  {
    path: 'departments',
    component: ShowDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {
}
