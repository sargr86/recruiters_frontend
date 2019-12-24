import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowTerritoriesComponent} from '@territories/show-territories/show-territories.component';
import {AttachTerritoriesComponent} from '@territories/attach-territories/attach-territories.component';
import {SaveTerritoriesComponent} from '@territories/save-territories/save-territories.component';


const routes: Routes = [
  {
    path: 'show',
    component: ShowTerritoriesComponent
  },
  {
    path: 'attach',
    component: AttachTerritoriesComponent
  },
  {
    path: 'add',
    component: SaveTerritoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritoriesRoutingModule {
}
