import { Component, OnInit } from '@angular/core';
import { ChartsService, Population } from '../charts.service';

@Component({
  selector: 'app-mixed-chat',
  templateUrl: './mixed-chat.component.html',
  styleUrls: ['./mixed-chat.component.scss']
})
export class MixedChatComponent implements OnInit {

  populationData: Population[];
  types: string[] = ["area", "stackedarea", "fullstackedarea"];

  constructor(service: ChartsService) {
      this.populationData = service.getPopulationData();
  }


  ngOnInit(): void {
  }

}
