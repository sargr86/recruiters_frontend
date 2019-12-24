import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from '@core/components/not-found/not-found.component';
import {ProfileComponent} from '@app/users/profile/profile.component';
import {AuthGuard} from '@core/guards/auth.guard';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {path: 'territories', loadChildren: () => import('./territories/territories.module').then(m => m.TerritoriesModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

