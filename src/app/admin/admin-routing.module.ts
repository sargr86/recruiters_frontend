import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from '@app/admin/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard/show',
    component: DashboardComponent
  },

  {path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
  {path: 'territories', loadChildren: () => import('../territories/territories.module').then(m => m.TerritoriesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
