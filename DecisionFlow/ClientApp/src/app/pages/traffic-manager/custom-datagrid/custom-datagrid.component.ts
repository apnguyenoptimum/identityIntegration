import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DxDataGridComponent,
 
} from 'devextreme-angular';
import query from 'devextreme/data/query';
import { TrafficManagerService, Order } from '../traffic-manager.service';

@Component({
  selector: 'app-custom-datagrid',
  templateUrl: './custom-datagrid.component.html',
  styleUrls: ['./custom-datagrid.component.scss']
})
export class CustomDatagridComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  orders: Order[];

  expanded = true;

  totalCount: number;

  groupingValues: any[];

  constructor(service: TrafficManagerService) {
    this.orders = service.getOrders();
    this.totalCount = this.getGroupCount('CustomerStoreState');

    this.groupingValues = [{
      value: 'CustomerStoreState',
      text: 'Grouping by State',
    }, {
      value: 'Employee',
      text: 'Grouping by Employee',
    }];
  }

  getGroupCount(groupField: any) {
    return query(this.orders)
      .groupBy(groupField)
      .toArray().length;
  }

  groupChanged(e: any) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.totalCount = this.getGroupCount(e.value);
  }

  collapseAllClick() {
    this.expanded = !this.expanded;
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }

  ngOnInit(): void {
  }

}
