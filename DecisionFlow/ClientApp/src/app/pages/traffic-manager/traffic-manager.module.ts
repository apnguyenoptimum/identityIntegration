import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { TrafficManagerComponent } from './traffic-manager.component';
import { CustomDatagridComponent } from './custom-datagrid/custom-datagrid.component';
import {  DxDataGridModule, DxButtonModule, DxTemplateModule, DxSelectBoxModule,DxDropDownBoxModule, DxDropDownButtonModule } from 'devextreme-angular';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';



@NgModule({
  declarations: [
    TrafficManagerComponent,
    CustomDatagridComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxTemplateModule,
    DxToolbarModule,
    DxSelectBoxModule,DxDropDownBoxModule, DxDropDownButtonModule
  ],
  exports: [
    TrafficManagerComponent
  ]
})
export class TrafficManagerModule { }
