import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSpfPanelComponent } from './top-spf-panel/top-spf-panel.component';
import { SpfComponent } from './spf.component';
import { DxButtonModule, DxChartModule, DxSelectBoxModule, DxPivotGridModule } from 'devextreme-angular';
import { TopChartSpfComponent } from './top-chart-spf/top-chart-spf.component';
import { BottomChartSpfComponent } from './bottom-chart-spf/bottom-chart-spf.component';


@NgModule({
  declarations: [
    TopSpfPanelComponent,
    SpfComponent,
    TopChartSpfComponent,
    BottomChartSpfComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule,
    DxChartModule, 
    DxSelectBoxModule,
    DxPivotGridModule
  ],
  exports: [
    TopSpfPanelComponent,
    SpfComponent
  ]
})
export class SpfModule { }
