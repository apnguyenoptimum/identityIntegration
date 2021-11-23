import { Component, OnInit } from '@angular/core';

import { Filter,  AdminService } from '../admin.service';

@Component({
  selector: 'app-custom-filters-grid',
  templateUrl: './custom-filters-grid.component.html',
  styleUrls: ['./custom-filters-grid.component.scss']
})
export class CustomFiltersGridComponent implements OnInit {
  filters: Filter[]; 
  constructor(service:  AdminService) {
    this.filters = service.getFilters();
  }

  ngOnInit(): void {
  }

}
