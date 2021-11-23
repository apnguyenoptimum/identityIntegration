import { Component, OnInit } from '@angular/core';
import * as dummyData from './ExplodedExample3.json';

@Component({
  selector: 'app-exploded-chart',
  templateUrl: './exploded-chart.component.html',
  styleUrls: ['./exploded-chart.component.scss']
})
export class ExplodedChartComponent implements OnInit {
  tasks!: Task[];
  // employees!: Employee[];
  // priorities!: Priority[];
  statuses!: string[];
  jsonData!: any[];

  constructor() {
    this.jsonData = JSON.parse(JSON.stringify(dummyData))["default"];
    this.jsonData.map((t) => console.log(t.ComponentID))
  }

  ngOnInit(): void {
  }

  getCompletionText(cellInfo: any) {
    return cellInfo.valueText + "%";
  }

}
