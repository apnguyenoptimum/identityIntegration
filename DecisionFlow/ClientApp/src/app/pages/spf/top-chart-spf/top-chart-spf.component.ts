import { Component, OnInit } from '@angular/core';
import { CountryInfo, EnergyDescription, SpfService } from '../spf.service';

@Component({
  selector: 'app-top-chart-spf',
  templateUrl: './top-chart-spf.component.html',
  styleUrls: ['./top-chart-spf.component.scss']
})
export class TopChartSpfComponent implements OnInit {

  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  countriesInfo: CountryInfo[];

  energySources: EnergyDescription[];

  constructor(service: SpfService) {
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }

  ngOnInit(): void {
  }

}
