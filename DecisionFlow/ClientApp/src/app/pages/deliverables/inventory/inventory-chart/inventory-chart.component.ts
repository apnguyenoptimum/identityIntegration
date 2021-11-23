import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory-chart',
  templateUrl: './inventory-chart.component.html',
  styleUrls: ['./inventory-chart.component.scss']
})
export class InventoryChartComponent implements OnInit {

  architecturesInfo: any[] = [{
    year: 1997,
    smp: 263,
    mmp: 226,
    cnstl: 10,
    cluster: 1,
  }, {
    year: 1999,
    smp: 169,
    mmp: 256,
    cnstl: 66,
    cluster: 7,
  }, {
    year: 2001,
    smp: 57,
    mmp: 257,
    cnstl: 143,
    cluster: 43,
  }, {
    year: 2003,
    smp: 0,
    mmp: 163,
    cnstl: 127,
    cluster: 210,
  }, {
    year: 2005,
    smp: 0,
    mmp: 103,
    cnstl: 36,
    cluster: 361,
  }, {
    year: 2007,
    smp: 0,
    mmp: 91,
    cnstl: 3,
    cluster: 406,
  }];
  

  filterValue: any;
  materialDataSource: any;
  math = Math;
  showPageSizeSelector = true;
  displayMode = 'full';
  showInfo = true;
  showNavButtons = true;
  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];
  readonly allowedPageSizes = [5, 10, 'all'];


  constructor( private _filterService: FilterService, private httpClient: HttpClient, private _inventoryService: InventoryService) { 
  }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
}

  ngOnInit(): void {
    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      console.log(filter, 'the filter value')
      this.materialDataSource = this.getGridData(filter)
    })
  }

  getGridData(body: any){
    return this._inventoryService.getGridData(this.httpClient, "https://localhost:44300/api/DeliverableView/GetInventoryViewDataByFilter", body)
  }

}
