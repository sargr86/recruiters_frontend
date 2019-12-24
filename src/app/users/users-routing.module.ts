import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowUsersComponent} from '@app/users/show-users/show-users.component';
import {AttachTerritoryComponent} from '@app/users/attach-territory/attach-territory.component';
import {SaveUsersComponent} from '@app/users/save-users/save-users.component';
import {ProfileComponent} from '@app/users/profile/profile.component';


const routes: Routes = [
  {
    path: 'show',
    component: ShowUsersComponent
  },
  {
    path: 'attach-territory',
    component: AttachTerritoryComponent
  },
  {
    path: 'add',
    component: SaveUsersComponent
  },
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
