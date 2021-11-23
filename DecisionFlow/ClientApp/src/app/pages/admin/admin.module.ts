import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DxDataGridModule } from 'devextreme-angular';
import { CustomFiltersGridComponent } from './custom-filters-grid/custom-filters-grid.component';


@NgModule({
  declarations: [AdminComponent, CustomFiltersGridComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
