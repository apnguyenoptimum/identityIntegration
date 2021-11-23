import { Component, OnInit } from '@angular/core';

import { AdminService, Employee, State, Role, Filter } from './admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  employees: Employee[];
  states: State[];
  roles: Role[];
  filters: Filter[];


  constructor(service: AdminService) { 
    this.employees =  service.getEmployees();
    this.states =  service.getStates();
    this.roles = service.getRoles();
    this.filters = service.getFilters();
  }

  ngOnInit(): void {
  }

}
