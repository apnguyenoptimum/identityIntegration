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
      "Customers": [
        {
        }
      ],
      "Programs": [
       
      ],
      "Planners": [
     
      ],
      "locationID": 4,
      "startDate": "2021-10-10T21:58:19.791Z",
      "endDate": "2021-12-10T21:58:19.791Z"
    }
  )
  baseUrl: any;
  currentFilterValue = this.filterValue.asObservable();

  changeFilterValue(filter: any){
    this.filterValue.next(filter)
    console.log(this.filterValue, 'filter value in service')
  }

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string
    ) { 
      this.baseUrl = baseUrl;
  }

  getAllFilters(){
  
    return this.httpClient.get(this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4")
  }

  getCustomerFilters(http: any, url: any) {

    return new CustomStore({
      loadMode: 'raw',
      key: 'CustomerID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            console.log(res, 'customer filters **************8')
            return res.Result.Customers
          });
      },
    })
  }

  getFilteredCustomerFilters(http: any, url: any, filteredCustomer: any) {

    return new CustomStore({
      loadMode: 'raw',
      key: 'CustomerID',
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

    return new CustomStore({
      loadMode: 'raw',
      key: 'ProgramID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return res.Result.Programs
          });
      },
    });
  }

  getPlannerFilters(http: any, url: any) {
 
    return new CustomStore({
      loadMode: 'raw',
      key: 'PlannerID',
      load() {
        return http.get(url)
          .toPromise()
          .then((res: any) => {
            return res.Result.Planners
          });
      },
    });
  }

}
