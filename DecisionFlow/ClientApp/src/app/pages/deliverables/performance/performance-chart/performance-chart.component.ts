import { Component, OnInit } from '@angular/core';
import { PerformanceService, Employee } from '../performance.service';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent implements OnInit {
  employees: Employee[];

  constructor(service: PerformanceService) { 
    this.employees = service.getEmployees();
  }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
}

  ngOnInit(): void {
  }
}
