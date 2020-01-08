import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from '@app/admin/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard/show-dashboard',
    component: DashboardComponent
  },

  {path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
  {path: 'counselors', loadChildren: () => import('../counselors/counselors.module').then(m => m.CounselorsModule)},
  {path: 'companies', loadChildren: () => import('../companies/companies.module').then(m => m.CompaniesModule)},
  {path: 'recruiters', loadChildren: () => import('../recruiters/recruiters.module').then(m => m.RecruitersModule)},
  {path: 'territories', loadChildren: () => import('../territories/territories.module').then(m => m.TerritoriesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
