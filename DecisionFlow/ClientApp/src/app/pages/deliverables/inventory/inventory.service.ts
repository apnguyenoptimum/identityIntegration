import { Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
    private TopPanelValue = new BehaviorSubject<any>(
        {
          "makeSurplus": 0,
          "buySurplus": 0,
          "targetInventoryCost": 0,
          "currentInventoryCost": 0,
          "excessInventoryCost": 0,
          "projectedInventoryCost": 0,
          "gapInventoryCost": 0
        }
      );
    
    private overInventoried = new BehaviorSubject<any>(
        {
            "overInventoried": 0,
            "overInventoriedParts": []
        }
    );
    currentOverInventoriedValue = this.overInventoried.asObservable();
    currentTopPanelValue = this.TopPanelValue.asObservable();
    
    changeTopPanelValue(filter: any){
        this.TopPanelValue.next(filter)
        console.log(this.TopPanelValue, 'filter value in service')
    }

    changeOverInventoriedValue(value: any){
        this.overInventoried.next(value);
    }


    getGridData(http: any, url: any, body: any) {
       

        return new CustomStore({
          loadMode: 'raw',
          key: 'materialID',
          load:() => {
            return http.post(url, body)
            .toPromise()
            .then((res: any) => {
              let pre = res.result;
              let lineObj: any = {};
              this.changeTopPanelValue(res.summary)
              let overInventoried = 0;
              let overInventoriedParts: any = []
              pre.map((obj: any) => {
                  if((obj.makeConstraint + obj.buyConstraint) ==  0){
                      overInventoried += 1;
                      overInventoriedParts.push(obj.deliverablePartNumber)
                  }
                  lineObj.actual = Math.ceil(obj.currentInventoryCost);
                  // lineObj.projected = obj.projectedInventoryCost;
                  lineObj.projected = 0;
                  lineObj.target = Math.ceil(obj.targetInventoryCost)
                  obj.lineChart = lineObj;
              })

              let overInventoriedInfo = {
                  "overInventoried": overInventoried,
                  "overInventoriedParts": overInventoriedParts
              }

              this.changeOverInventoriedValue(overInventoriedInfo);

              
              
              console.log(pre, 'the results')
              return pre
            })
            .catch((error: any) => {
                console.error(error, 'error');
              });
          },
        });
      }
}
