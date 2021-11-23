import { Component, OnInit } from '@angular/core';
import { ChartsService, Population } from '../charts.service';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  populationData: Population[];
  types: string[] = ["area", "stackedarea", "fullstackedarea"];

  constructor(service: ChartsService) {
      this.populationData = service.getPopulationData();
  }

  ngOnInit(): void {
  }

}
