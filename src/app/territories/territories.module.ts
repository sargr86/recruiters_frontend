import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TerritoriesRoutingModule} from './territories-routing.module';
import {SaveTerritoriesComponent} from './save-territories/save-territories.component';
import {ShowTerritoriesComponent} from './show-territories/show-territories.component';
import {AttachTerritoriesComponent} from './attach-territories/attach-territories.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [SaveTerritoriesComponent, ShowTerritoriesComponent, AttachTerritoriesComponent],
  imports: [
    CommonModule,
    TerritoriesRoutingModule,
    SharedModule
  ]
})
export class TerritoriesModule {
}
