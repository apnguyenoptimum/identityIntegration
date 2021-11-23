import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { TopExplodedPanelComponent } from './top-exploded-panel/top-exploded-panel.component';
import { ExplodedComponent } from './exploded.component';
import { DxSelectBoxModule, DxTreeListModule, DxBulletModule, DxTemplateModule, DxChartModule } from 'devextreme-angular';
import { ExplodedChartComponent } from './exploded-chart/exploded-chart.component';
import { ProjectedChartComponent } from './projected-chart/projected-chart.component';
import { ExplodedService } from './exploded.service';


@NgModule({
  declarations: [
    TopExplodedPanelComponent,
    ExplodedComponent,
    ExplodedChartComponent,
    ProjectedChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DxSelectBoxModule,
    DxTreeListModule,
    DxBulletModule, 
    DxTemplateModule,
    DxChartModule
  ],
  exports: [
    TopExplodedPanelComponent,
    ExplodedComponent
  ],
  providers: [
    ExplodedService
  ]
})
export class ExplodedModule { }
