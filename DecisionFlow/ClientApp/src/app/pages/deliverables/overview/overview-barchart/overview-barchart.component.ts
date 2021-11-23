import { Component, OnInit, ViewChild } from '@angular/core';
import { OverviewService, MaleAgeStructure } from '../overview.service';
import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-overview-barchart',
  templateUrl: './overview-barchart.component.html',
  styleUrls: ['./overview-barchart.component.scss']
})
export class OverviewBarchartComponent implements OnInit {
 
  target = 110;
  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;

  getSeriesByName(seriesName: string) {
    return this.chart.instance.getSeriesByName(seriesName);
  }

  constructor(service: OverviewService) {
  
    setTimeout(() => {
      console.log(this.getSeriesByName("Projected").select())
    }, 1000)
  
   }

   customizeTooltip(arg: any) {
    return {
      text: `${arg.seriesName}: ${arg.valueText}`,
    };
  }
  

  ngOnInit(): void {
  }

}
