import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-performance-panel',
  templateUrl: './top-performance-panel.component.html',
  styleUrls: ['./top-performance-panel.component.scss']
})
export class TopPerformancePanelComponent implements OnInit {
  isUnit = true;
  constructor() { }

  ngOnInit() {
  }

  toggleUnit(){
    this.isUnit = true;
  }
  toggleDollar(){
    this.isUnit = false;
  }

}
