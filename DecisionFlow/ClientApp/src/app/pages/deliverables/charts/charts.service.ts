import { Injectable } from '@angular/core';

export class Population {
    country!: string;
    y014!: number;
    y1564!: number;
    y65!: number;
}

export class Data {
  day!: string;
  oranges!: number;
}

export class MaleAgeStructure {
  state!: string;
  young!: number;
  middle!: number;
  older!: number;
}

const maleAgeData: MaleAgeStructure[] = [{
  state: 'Germany',
  young: 5.3,
  middle: 26,
  older: 8,
}, {
  state: 'Japan',
  young: 6.45,
  middle: 30.5,
  older: 11.22,
}, {
  state: 'Russia',
  young: 12.56,
  middle: 45.5,
  older: 6.5,
}, {
  state: 'USA',
  young: 32,
  middle: 87,
  older: 15,
}];

const data: Data[] = [{
  day: 'Monday',
  oranges: 3,
}, {
  day: 'Tuesday',
  oranges: 2,
}, {
  day: 'Wednesday',
  oranges: 3,
}, {
  day: 'Thursday',
  oranges: 4,
}, {
  day: 'Friday',
  oranges: 6,
}, {
  day: 'Saturday',
  oranges: 11,
}, {
  day: 'Sunday',
  oranges: 4,
}];

let populationData: Population[] = [{
    country: "China",
    y014: 233866959,
    y1564: 1170914102,
    y65: 171774113
}, {
    country: "India",
    y014: 373419115,
    y1564: 882520945,
    y65: 76063757
}, {
    country: "United States",
    y014: 60554755,
    y1564: 213172625,
    y65: 54835293
}, {
    country: "Indonesia",
    y014: 65715705,
    y1564: 177014815,
    y65: 18053690
}, {
    country: "Brazil",
    y014: 45278034,
    y1564: 144391494,
    y65: 17190842
}, {
    country: "Russia",
    y014: 24465156,
    y1564: 96123777,
    y65: 20412243
}];

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  getPopulationData(): Population[] {
    return populationData;
  }
  getData(): Data[] {
    return data;
  }
  getMaleAgeData(): MaleAgeStructure[] {
    return maleAgeData;
  }
}
