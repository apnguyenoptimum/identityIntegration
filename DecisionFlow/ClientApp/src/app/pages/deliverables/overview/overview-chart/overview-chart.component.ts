import { Component, OnInit } from '@angular/core';
import { OverviewService} from '../overview.service';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { FilterService } from 'src/app/shared/services/filter.service';
import { Router, NavigationEnd } from '@angular/router';
import CustomStore from 'devextreme/data/custom_store';
import { getgroups } from 'process';
import { resolve } from 'dns';



@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.scss']
})
export class OverviewChartComponent implements OnInit {
  materialDataSource: any
  filterValue: any;
  showPageSizeSelector = true;
  displayMode = 'full';
  showInfo = true;
  math = Math;
  showNavButtons = true;
  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];
  readonly allowedPageSizes = [5, 10, 'all'];

  customizeTooltip = (pointsInfo: any) => {
    return ({ text: `${pointsInfo.seriesName}: ${parseInt(pointsInfo.originalValue)}
              
    ` });
  }

  constructor(
    private overviewService: OverviewService,
    private httpClient: HttpClient,
    private _filterService: FilterService,
    private router: Router
     ) { 
    
  }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
}

  ngOnInit(): void {
    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      let theFinal: any
      this.getGridData(filter).then((data: any) => {
            
        theFinal = data
        this.materialDataSource = new CustomStore({
          loadMode: 'raw',
          key: 'materialID',
          load: () => {
             return theFinal
          },// load end
        });
      })
    
    })
  
  }

  getGridData(body: any){
    return this.overviewService.getTopPanelData(this.httpClient, "https://localhost:44300/api/DeliverableView/GetAllGridDataByFilter", body)
  }

  onCellClick($event: any){
    console.log($event)
    if($event.column.name == "deliverable"){
      this.router.navigate(['/exploded'])
    }
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Employees');
    console.log(e, '--------------------------------')

    exportDataGrid({
      component: e.component,
      worksheet,
      customizeCell: ({ gridCell, excelCell }) => {
        if(gridCell?.column != undefined){

          if(gridCell.rowType != "header"){
   
          }

          if(gridCell.column.cellTemplate == "shipmentsCompletions" && gridCell.rowType != "header"){
            excelCell.value="Actual Completions: " + gridCell.data.actualCompletion + " | " + "Projected Completions: " + gridCell.data.projectedCompletion + " | " + "Actual Shipments: " + gridCell.data.actualShipment + " | " + "Projected Shipments: " + gridCell.data.projectedShipment

          }
          if(gridCell.column.cellTemplate == "shipments" && gridCell.rowType != "header"){
            excelCell.value= "Actual Shipments: " + gridCell.data.actualShipment + " | " + "Projected Shipments: " + gridCell.data.projectedShipment
          }
          if(gridCell.column.cellTemplate == "completions" && gridCell.rowType != "header"){
        
            gridCell.column.visible = true
            excelCell.value= "Actual Completions: " + gridCell.data.actualCompletion + " | " + "Projected Completions: " + gridCell.data.projectedCompletion
          }
         
        }
      },
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
     
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }

}