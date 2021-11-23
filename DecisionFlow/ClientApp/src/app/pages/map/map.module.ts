import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapDatagridComponent } from './map-datagrid/map-datagrid.component';
// import { SharedModule } from '../shared/shared.module';
import { DxDataGridModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MapComponent,
    MapDatagridComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    SharedModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
