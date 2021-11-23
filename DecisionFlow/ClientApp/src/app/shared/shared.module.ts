import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component'
import { DxDropDownBoxModule, DxListModule, DxDataGridModule, DxButtonModule, DxFormModule, DxTemplateModule, DxPopupModule, DxTooltipModule, DxTextBoxModule } from "devextreme-angular";
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    DxDropDownBoxModule,
    DxListModule,
    DxDataGridModule,
    DxButtonModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    DxFormModule,
    DxTemplateModule, 
    DxPopupModule,
    DxTooltipModule,
    HttpClientModule,
    DxTextBoxModule
  ],
  exports: [
    FilterComponent
  ]
})
export class SharedModule { }
