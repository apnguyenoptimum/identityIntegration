import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { FilterService } from 'src/app/shared/services/filter.service';


@Component({
  selector: 'app-top-inventory-panel',
  templateUrl: './top-inventory-panel.component.html',
  styleUrls: ['./top-inventory-panel.component.scss']
})
export class TopInventoryPanelComponent implements OnInit {
  isUnit = true;
  topPanelValues: any;
  overInventoried: any;
  math = Math;
  isVisible = true;
  endDate = "Projected"
  constructor( private _inventoryService: InventoryService, private _filterService: FilterService) { }

  ngOnInit() {
    this._inventoryService.currentTopPanelValue.subscribe((value: any) => {
      this.topPanelValues = value;
    })

    this._inventoryService.currentOverInventoriedValue.subscribe((value: any) => {
      this.overInventoried = value;
    })
    setTimeout(() => {
      this.isVisible = false;
    })

    this._filterService.currentFilterValue.subscribe((filter: any) => {

      console.log(filter, 'the filter value')
      this.endDate = new Date(filter.endDate).toLocaleDateString("en-US");

    })
  }

  toggleInventoried(){
    this.isVisible = !this.isVisible;
  }

}
