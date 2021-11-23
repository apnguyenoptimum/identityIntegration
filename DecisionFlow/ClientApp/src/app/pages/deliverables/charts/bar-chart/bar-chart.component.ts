import { Component, OnInit } from '@angular/core';
import { ChartsService, Data } from '../charts.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  dataSource: Data[];

  constructor(service: ChartsService) { 
    this.dataSource = service.getData();
  }

  ngOnInit(): void {
  }

}
