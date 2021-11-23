import { Component, OnInit } from '@angular/core';
import { ExplodedService, OilPrice } from '../exploded.service';

@Component({
  selector: 'app-projected-chart',
  templateUrl: './projected-chart.component.html',
  styleUrls: ['./projected-chart.component.scss']
})
export class ProjectedChartComponent implements OnInit {
  oilPrices: OilPrice[];

  constructor(service: ExplodedService) {
    this.oilPrices = service.getOilPrices();
  }
  ngOnInit(): void {
  }

}
