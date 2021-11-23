import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { PerformanceComponent } from './performance/performance.component';
import { ChartsComponent } from './charts/charts.component';
import { TopPanelComponent } from './overview/top-panel/top-panel.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { OverviewComponent } from './overview/overview.component';
import { TopInventoryPanelComponent } from './inventory/top-inventory-panel/top-inventory-panel.component';
import { TopPerformancePanelComponent } from './performance/top-performance-panel/top-performance-panel.component';
import { DeliverablesComponent } from './deliverables.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxTabsModule, DxDataGridModule, DxChartModule, DxSelectBoxModule, DxBulletModule, DxTooltipModule, DxCheckBoxModule, DxButtonModule } from 'devextreme-angular';
import { OverviewChartComponent } from './overview/overview-chart/overview-chart.component';
import { InventoryChartComponent } from './inventory/inventory-chart/inventory-chart.component';
import { PerformanceChartComponent } from './performance/performance-chart/performance-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { MixedChatComponent } from './charts/mixed-chat/mixed-chat.component';
import { StackedChartComponent } from './charts/stacked-chart/stacked-chart.component';
import { OverviewBarchartComponent } from './overview/overview-barchart/overview-barchart.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    InventoryComponent,
    PerformanceComponent,
    ChartsComponent,
    TopPanelComponent,
    TopNavComponent,
    OverviewComponent,
    TopInventoryPanelComponent,
    TopPerformancePanelComponent,
    DeliverablesComponent,
    OverviewChartComponent,
    InventoryChartComponent,
    PerformanceChartComponent,
    AreaChartComponent,
    BarChartComponent,
    MixedChatComponent,
    StackedChartComponent,
    OverviewBarchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DxTabsModule,
    DxDataGridModule,
    DxChartModule, 
    DxSelectBoxModule,
    IconsModule,
    DxBulletModule,
    DxTooltipModule,
    DxCheckBoxModule,
    DxButtonModule
  ],
  exports: [
    ChartsComponent,
    InventoryComponent,
    PerformanceComponent,
    TopPanelComponent,
    TopNavComponent,
    OverviewComponent,
    DeliverablesComponent
  ]
})
export class DeliverablesModule { }
