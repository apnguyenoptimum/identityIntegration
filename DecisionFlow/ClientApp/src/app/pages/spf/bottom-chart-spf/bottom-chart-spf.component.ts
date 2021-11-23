import { Component, OnInit, NgModule, ViewChild, AfterViewInit, enableProdMode, } from '@angular/core';
import { SpfService } from '../spf.service';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import {
  DxPivotGridComponent,
  DxChartComponent
} from 'devextreme-angular';

@Component({
  selector: 'app-bottom-chart-spf',
  templateUrl: './bottom-chart-spf.component.html',
  styleUrls: ['./bottom-chart-spf.component.scss']
})
export class BottomChartSpfComponent implements AfterViewInit {
  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid!: DxPivotGridComponent;
  pivotGridDataSource: any;
  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;

  constructor(service: SpfService) { 
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = {
      fields: [{
        caption: 'Region',
        width: 120,
        dataField: 'region',
        area: 'row',
        sortBySummaryField: 'Total',
      }, {
        caption: 'City',
        dataField: 'city',
        width: 150,
        area: 'row',
      }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column',
      }, {
        groupName: 'date',
        groupInterval: 'month',
        visible: false,
      }, {
        caption: 'Total',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
      }],
      store: service.getSales(),
    };
  }

  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });

    setTimeout(() => {
      const dataSource = this.pivotGrid.instance.getDataSource();
      dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2013]);
    }, 0);
  }

  customizeTooltip(args: any) {
    return {
      html: `${args.seriesName} | Total<div class='currency'>${args.valueText}</div>`,
    };
  }

  ngOnInit(): void {
  }

}
