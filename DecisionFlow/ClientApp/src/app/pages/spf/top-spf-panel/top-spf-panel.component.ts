import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-spf-panel',
  templateUrl: './top-spf-panel.component.html',
  styleUrls: ['./top-spf-panel.component.scss']
})
export class TopSpfPanelComponent implements OnInit {

  simpleProducts: string[] = [
    "Soft Cloth A",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
  ];

  constructor() { }

  ngOnInit() {
  }

}
