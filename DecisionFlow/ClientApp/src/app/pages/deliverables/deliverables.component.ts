import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.scss']
})
export class DeliverablesComponent implements OnInit {
  overview = true;
  inventory = false;
  performance = false;
  charts = false; 
  constructor() { }

  receiveClick($event: any){

    if ($event == 'overview'){
      this.overview = true;
      this.inventory = false;
      this.performance = false;
      this.charts = false; 
    }
    if ($event == 'inventory'){
      this.overview = false;
      this.inventory = true;
      this.performance = false;
      this.charts = false; 
    }
    if ($event == 'performance'){
      this.overview = false;
      this.inventory = false;
      this.performance = true;
      this.charts = false; 
    }
    if ($event == 'charts'){
      this.overview = false;
      this.inventory = false;
      this.performance = false;
      this.charts = true; 
    }

  }

  ngOnInit(): void {
  }

}
