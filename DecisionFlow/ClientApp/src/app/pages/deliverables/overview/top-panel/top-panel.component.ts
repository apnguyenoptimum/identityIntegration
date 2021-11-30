import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OverviewService} from '../overview.service';
import { DxChartComponent } from 'devextreme-angular';
import { FilterService } from 'src/app/shared/services/filter.service';
import CustomStore from 'devextreme/data/custom_store';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;
  chart_visualRange: any = { startValue: null, endValue: null}
  filterValue: any;
  isUnit = false;
  topPanelData: any;
  sumDataObject: any = {};
  barChartData: any = {}
  barChartUnitsData: any = {};
  barDataSource: any =[{}]; 
  healthySum = 0;
  constrainedSum = 0;
  target: any = 10;
  targetUnit: any = 10;
  targetDollars: any  = 10;
  buyPartsArray: any;
  makePartsArray: any;
  healthyPartsArray: any = [];
  constrainedPartsArray: any = [];
  healthyVisible = true; 
  constrainedVisible = true;
  chartWidth = 600
  percentValue = 0;
  isNegative = false;
  chartTitle = "Shipment Revenue Projections"
  public innerHeight: any;
  materialDataSource: any;
  showPageSizeSelector = true;
  displayMode = 'full';
  showInfo = true;
  math = Math;
  showNavButtons = true;
  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];
  readonly allowedPageSizes = [5, 10, 'all'];
  baseUrl: any;



  constructor(
    private _overviewService: OverviewService,
    private httpClient: HttpClient,
    private _filterService: FilterService,
    private router: Router,
    @Inject('BASE_URL') baseUrl: string
     ) { 
       this.baseUrl = baseUrl;
     }

     @HostListener('window:resize', ['$event'])
     onResize() {
       this.innerHeight = window.innerHeight;
       if(this.innerHeight < 678){
         this.chartWidth = 300
       } else {
         this.chartWidth = 600;
       }
     }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    if(this.innerHeight < 678){
      this.chartWidth = 300
    } else {
      this.chartWidth = 600;  
    }

    this.innerHeight = window.innerHeight;

    this._filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;
      setTimeout(() => {
        this.healthyVisible = false;
        this.constrainedVisible = false;
      })
      this.getMaterialData(filter)
    .then((materialData: any) => {
      this.topPanelData = materialData;
      let theFinal: any;
      theFinal = materialData
      this.materialDataSource = new CustomStore({
        loadMode: 'raw',
        key: 'materialID',
        load: () => {
           return theFinal
        },// load end
      });
      console.log(materialData, 'material data')
      let buyShortageSum = 0;
      let makeShortageSum = 0; 
      let forecastSum = 0;
      let gapSum = 0;
      let foreCastUnitSum = 0;
      let gapUnitSum = 0;
      let projectedSum = 0;
      let targetSum = 0;
      let actualSum = 0;
      let projectedUnits = 0
      let actualUnits = 0;
      let targetUnits = 0;
      let cSum = 0;
      let hSum = 0
      let cArr: any = []
      let hArr: any = []
      this.topPanelData.map((d: any ) => {
        buyShortageSum += Math.ceil(d.buyPartCountCausingShortage);
        makeShortageSum += Math.ceil(d.makePartCountCausingShortage);
        forecastSum += Math.ceil(d.forecastRevenue);
        gapSum += Math.ceil(d.gapRevenue);
        projectedSum += Math.ceil(d.projectedRevenue);
        targetSum += Math.ceil(d.targetRevenue);
        actualSum += Math.ceil(d.actualRevenue);
        console.log(Math.ceil(d.actualRevenue))
        foreCastUnitSum += Math.ceil(d.forecastUnits);
        gapUnitSum += Math.ceil(d.gapUnits);
        projectedUnits += Math.ceil(d.projectedShipment);
        actualUnits += Math.ceil(d.actualShipment);
        targetUnits += Math.ceil(d.targetShipment);


        if(d.constraintDeliverable == false){
          cSum += 1;
          cArr.push(d.deliverable)
        }
        if(d.healthyDeliverable == false){
          hSum += 1;
          hArr.push(d.deliverable)
        }

        this.constrainedSum = cSum;
        this.healthySum = hSum;
        this.constrainedPartsArray = cArr;
        this.healthyPartsArray = hArr;
     
    
      })

      this.sumDataObject.buyShortage = buyShortageSum;
      this.sumDataObject.makeShortage = makeShortageSum;
      this.sumDataObject.gap = gapSum;
      this.sumDataObject.forecast = forecastSum;
      this.sumDataObject.forecastUnits = foreCastUnitSum;
      this.sumDataObject.gapUnits = gapUnitSum;
      this.sumDataObject.target = targetSum;
      this.barChartData.projected = projectedSum;
      this.barChartData.actual = actualSum;
      this.barChartData.target = targetSum;
      this.barChartData.state = ""

      this.barChartUnitsData.actual = actualUnits;
      this.barChartUnitsData.projected = projectedUnits;
      this.barChartUnitsData.target = targetUnits;
      this.targetDollars = targetSum;
      this.targetUnit = targetUnits;


      console.log(actualSum, projectedSum, 'actualSum projectedSUm')
        let percentage = gapSum/targetSum * 100
    
        if(percentage < 0){
          this.isNegative = true;
        } else {
          this.isNegative = false;
        }
        this.percentValue =  parseInt(percentage.toFixed(0))
        if(isNaN(this.percentValue)){
          this.percentValue = 0;
        }

        this.createBarChartStore(targetSum, this.isUnit)
    })
    })

    
  }

  export() {
    this.chart.instance.exportTo('Example', 'png');
  }

  customizeTooltip = (pointsInfo: any) => {
    return ({ text: `${pointsInfo.seriesName}: $${parseInt(pointsInfo.originalValue)}  
    ` });
  }

  
  toggleHealthy() {
    this.healthyVisible = !this.healthyVisible;
  }

  toggleConstrained() {
    this.constrainedVisible = !this.constrainedVisible;
  }

  createBarChartStore(targetSum: any, isUnit: boolean){
    this.chartTitle = "Shipment Revenue Projections"
    this.chart_visualRange = { startValue: null, endValue: targetSum }
    console.log(this.chart_visualRange, 'visual range')
    this.target = targetSum
    let actual = this.barChartData.actual
    let projected = this.barChartData.projected
    let target = this.barChartData.target
    this.barDataSource = [{
      state: "",
      actual: parseFloat(actual),
      projected: parseFloat(projected),
      target: parseFloat(target)
    }]
    this.getSeriesByName("Projected").select()
    // if(!isUnit){
    //   this.chartTitle = "Revenue Projections"
    //   this.target = targetSum
    //   let actual = this.barChartData.actual
    //   let projected = this.barChartData.projected
    //   let target = this.barChartData.target
    //   this.barDataSource = [{
    //     state: "",
    //     actual: parseFloat(actual),
    //     projected: parseFloat(projected),
    //     target: parseFloat(target)
    //   }]
    //   this.getSeriesByName("Projected").select()
    // } else {
    //   this.chartTitle = "Unit Projections"
    //   this.target = targetSum
    //   this.targetUnit = this.targetUnit
    //   let actual = this.barChartUnitsData.actual
    //   let projected = this.barChartUnitsData.projected
    //   let target = this.barChartUnitsData.target
    //   this.barDataSource = [{
    //     state: "",
    //     actual: parseFloat(actual),
    //     projected: parseFloat(projected),
    //     target: parseFloat(target)
    //   }]
    //   this.getSeriesByName("Projected").select()
    // }
   
  
  }

  onCellClick($event: any){
    console.log($event)
    if($event.column.name == "deliverable"){
      this.router.navigate(['/exploded'])
    }
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Customers');
 
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
    e.component.columnOption("shortCompletions", "visible", "false")
    e.cancel = true;

  }

  getSeriesByName(seriesName: string) {
    return this.chart.instance.getSeriesByName(seriesName);
  }

  getMaterialData(body: any){
    return this._overviewService.getTopPanelData(this.httpClient, this.baseUrl + "api/DeliverableView/GetAllGridDataByFilter", body)
  }

  
  toggleUnit(){
    this.isUnit = true;
    this.createBarChartStore(this.targetUnit, this.isUnit)
  }
  toggleDollar(){
    this.isUnit = false;
    this.createBarChartStore(this.targetDollars, this.isUnit)
  }

}
