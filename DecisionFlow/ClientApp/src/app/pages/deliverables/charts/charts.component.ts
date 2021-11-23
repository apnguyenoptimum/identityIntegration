import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  longtabs: any[] = [
    { text: "Deliveries" },
    { text: "Inventory" },
    { text: "Performance" },
    { text: "Custom"}
];

  constructor() { }

  ngOnInit(): void {
  }

}
