import { Component, OnInit } from '@angular/core';
import { OverviewService, Employee } from '../../deliverables/overview/overview.service';

@Component({
  selector: 'app-map-datagrid',
  templateUrl: './map-datagrid.component.html',
  styleUrls: ['./map-datagrid.component.scss']
})
export class MapDatagridComponent implements OnInit {
  employees: Employee[];

  constructor(service: OverviewService) { 
    this.employees = service.getEmployees();
  }
  calculateCellValue(data: any) {
    return [data.Title, data.FirstName, data.LastName].join(" ");
}
  ngOnInit(): void {
  }

}
