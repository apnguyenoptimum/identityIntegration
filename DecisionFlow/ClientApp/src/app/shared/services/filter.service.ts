import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import CustomStore from 'devextreme/data/custom_store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterValue = new BehaviorSubject<any>(
    {
      "customers": [
        {
        }
      ],
      "programs": [
       
      ],
      "planners": [
     
      ],
      "locationID": 4,
      "startDate": "2021-10-10T21:58:19.791Z",
      "endDate": "2021-12-10T21:58:19.791Z"
    }
  )
  currentFilterValue = this.filterValue.asObservable();
  baseUrl: any;

  changeFilterValue(filter: any){
    this.filterValue.next(filter)
    console.log(this.filterValue, 'filter value in service')
  }

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.baseUrl = baseUrl; 
  }

  getAllFilters(){
    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );
    return this.httpClient.get(this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4")
  }

  getCustomerFilters(http: any, url: any) {

    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );
    return new CustomStore({
      loadMode: 'raw',
      key: 'customerID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return res.result.customers
          });
      },
    })
  }

  getFilteredCustomerFilters(http: any, url: any, filteredCustomer: any) {

    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );
    return new CustomStore({
      loadMode: 'raw',
      key: 'customerID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return filteredCustomer
          });
      },
    })
  }

  
  getProgramFilters(http: any, url: any) {
    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );

    return new CustomStore({
      loadMode: 'raw',
      key: 'programID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return res.result.programs
          });
      },
    });
  }

  getPlannerFilters(http: any, url: any) {
    let header = new HttpHeaders().set(
      "x-api-key",
      "mJwY9uinltILC9XIOpTo" 
    );
    return new CustomStore({
      loadMode: 'raw',
      key: 'plannerID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return res.result.planners
          });
      },
    });
  }

}
