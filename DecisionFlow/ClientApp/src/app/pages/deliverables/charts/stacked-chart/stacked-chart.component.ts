import { Component, OnInit } from '@angular/core';
import { ChartsService, MaleAgeStructure } from '../charts.service';

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.scss']
})
export class StackedChartComponent implements OnInit {

  dataSource: MaleAgeStructure[];

  constructor(service: ChartsService) {
    this.dataSource = service.getMaleAgeData();
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.seriesName} years: ${arg.valueText}`,
    };
  }

  ngOnInit(): void {
  }

}
