import { Component, HostListener, OnInit, Inject } from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import * as moment from 'moment';
import { FilterService } from '../../services/filter.service';
import { HttpClient } from '@angular/common/http';
import { DaterangepickerComponent } from 'ngx-daterangepicker-material';
import {ViewChild} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild(DaterangepickerComponent) datePicker!: DaterangepickerComponent;
  customerTooltip = false;
  customerNames = []
  customerTitle = "CUSTOMERS"

  programTooltip = false;
  programNames = []
  programTitle = "PROGRAMS"

  plannerTooltip = false;
  plannerNames = []
  plannerTitle = "PLANNERS"
  popupVisible = false;
  isDropDownBoxOpened1 = false;
  isDropDownBoxOpened2 = false;
  isDropDownBoxOpened3 = false;
  isDropDownBoxOpened4 = false;
  selectedDates: any = { startDate:  moment().startOf('month'), endDate:  moment().endOf('month') };;
  isMaxFilter = false;
  isDisabled = false;
  filterValue: any;
  allFilters: any = [];
  textBoxValue!: any;
  filteredDataset: any
  globalCustomers: number[] = [];
  globalPlanners: any = []
  globalPrograms: any = []
  public innerHeight: any;
  columnValue = 8;
  saveButtonOptions: any;
  selectedCustomers: any = [];
  selectedCustomerValue = [];
  selectedPrograms: any = [];
  selectedProgramValue = [];
  selectedPlanners: any = [];
  selectedPlannerValue = [];
  selectedFilters: any = [];
  selectedFilterValue = [];
  filters: any = {
    customers: this.selectedCustomers, 
    programs: this.selectedPrograms,
    planners: this.selectedPlanners,
    startDate: this.selectedDates.startDate,
    endDate: this.selectedDates.endDate
  }
  buttonOptions = {
    text: 'Apply Filter',
    type: 'success',
    useSubmitBehavior: true
  };
  saveOptions = {
    text: 'Save Filters',
    type: 'normal',
    useSubmitBehavior: true,
  };
  baseUrl: any;

  ranges: any = {
    'Qtr 1': [moment().month(0).startOf('month'), moment().month(2).endOf('month')],
    'Qtr 2': [moment().month(3).startOf('month'), moment().month(5).endOf('month')],
    'Qtr 3': [moment().month(6).startOf('month'), moment().month(8).endOf('month')],
    'Qtr 4': [moment().month(9).startOf('month'), moment().month(11).endOf('month')],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'Last Year': [moment().subtract(1, 'years').endOf('week').startOf('day')]
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerHeight = window.innerHeight;
    if(this.innerHeight < 678){
      this.columnValue = 4;
    } else {
      this.columnValue = 8;
    }
  }

  constructor( private filterService: FilterService, private httpClient: HttpClient,  @Inject('BASE_URL') baseUrl: string) { 
    this.baseUrl = baseUrl;
    this.saveButtonOptions = {
      text: 'Save Filter',
      onClick: (e:any) => {
        const message = `Filters have been saved`;

        let filterGroup = {
          filterName: this.textBoxValue.value,
          customers: this.selectedCustomers,
          programs: this.selectedPrograms,
          planners: this.selectedPrograms
        }
        notify({
          message,
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
      },
    };
  }

  valueTextBoxChanged(data: any) {
    this.textBoxValue = data; 
  }

  ngOnInit(){

    this.filterService.currentFilterValue.subscribe((filter: any) => {
      this.filterValue = filter;

      let customers: any = []
      let programs: any = []
      let planners: any = []


      this.filterValue.customers.map((d: any) => {
        customers.push(d.customerID)
      });
      this.filterValue.programs.map((d: any) => {
        programs.push(d.programID)
      });
      this.filterValue.planners.map((d: any) => {
        planners.push(d.plannerID)
      });

      this.selectedCustomers = customers;
      this.selectedCustomerValue = this.selectedCustomers;

      setTimeout(() => {
        this.changeCustomerDropdown()
      }, 1000)  

      this.selectedPrograms = programs;
      this.selectedProgramValue = this.selectedPrograms;

      
      setTimeout(() => {
        if(this.selectedProgramValue.length == 0){
          this.programTitle = "PROGRAMS"
        } else {
          this.programTitle = "PROGRAMS (" + this.selectedProgramValue.length + ")"
        }     
      }, 1000)  


      this.selectedPlanners = planners;
      this.selectedPlannerValue = this.selectedPlanners;

      setTimeout(() => {
        if(this.selectedPlannerValue.length == 0){
          this.plannerTitle = "PLANNERS"
        } else {
          this.plannerTitle = "PLANNERS (" + this.selectedPlannerValue.length + ")"
        }    
      }, 1000)  

    })



    this.innerHeight = window.innerHeight;
    if(this.innerHeight < 678){
      this.columnValue = 4;
    } else {
      this.columnValue = 8;    
    }

    this.filterService.getAllFilters().subscribe((filters: any) => {
      console.log(filters, 'all filters')
      this.allFilters = filters.result
      this.filteredDataset = filters.result.filterDataSet
      // console.log(filters.result)
    })
    this.customerDataSource = this.filterService.getCustomerFilters(this.httpClient, this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4")
    this.programDataSource = this.filterService.getProgramFilters(this.httpClient, this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4" )
    this.plannerDataSource = this.filterService.getPlannerFilters(this.httpClient, this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4" )
    
    // console.log(this.customerDataSource, 'the source customer')
   
  }

  customFilters = [
    { ID: 1, Filter: "Filter 1" },
    { ID: 2, Filter: "Filter 2"},
    // ...
  ];

  customerDataSource: any; 
  programDataSource: any;
  plannerDataSource: any;

filterDataSource = new ArrayStore({
  data: this.customFilters,
  key: "ID"
});

 isTotalFilter(){
   console.log(this.allFilters, this.selectedCustomers)
   if(this.allFilters.customers.length - 1 == this.selectedCustomers.length){
     this.isMaxFilter = true;
   } else {
     this.isMaxFilter = false;
   }
 }

 toggleDefault() {
   if(this.selectedCustomerValue.length > 0){
    this.customerTooltip = !this.customerTooltip;
   }
  }

  toggleProgamDefault() {
    if(this.selectedProgramValue.length > 0){
      this.programTooltip = !this.programTooltip;
    }
  }

  togglePlannerDefault() {
    if(this.selectedPlannerValue.length > 0){
      this.plannerTooltip = !this.plannerTooltip;
    }
  }

  showFilterInfo = () => {
    console.log('filter test')
    this.popupVisible = !this.popupVisible
    console.log(this.popupVisible)
  }

  changeCustomerDropdown() {
    let customersRaw = this.customerDataSource.__rawData
    let names: any = []
      this.selectedCustomerValue =  this.selectedCustomers;
      this.isTotalFilter()
    console.log(this.selectedCustomers)
      if(this.selectedCustomerValue.length == 0){
        this.customerTitle = "CUSTOMERS"
      } else {
        this.customerTitle = "CUSTOMERS (" + this.selectedCustomerValue.length + ")"
      }

      customersRaw.map((obj: any) => {
        this.selectedCustomers.map((id: number) => {
          if(id == obj.customerID){
            names.push(obj.customerName)
          }
        })
      } )

      this.customerNames = names
  }


  changeProgramDropdown() {
    let programRaw = this.programDataSource.__rawData;
    let names: any = []
    console.log(programRaw)

    let customers: number[] = []
    this.selectedProgramValue = this.selectedPrograms;
    let filteredSet = this.filteredDataset.filter((dataSet: any) => {
      return this.selectedPrograms.includes(dataSet.programID)
    })

    filteredSet.map((set: any) => {
      if(!customers.includes(set.customerID)){
        customers.push(set.customerID)
      }
    })

    // filter customers based on program selection

    let filteredCustomers = this.customerDataSource.__rawData.filter((dataSet: any) => {
      return customers.includes(dataSet.customerID)
    })
    this.customerDataSource.__rawData = this.customerDataSource.__rawData.filter((dataSet: any) => {
      return customers.includes(dataSet.customerID)
    })
    this.globalPrograms = filteredCustomers;

  
    if(customers.length > 0 ){
  //filter customers based on program and planner selection, if planners are selected
      filteredCustomers = filteredCustomers.filter((dataSet: any) => {
  
        return !this.globalPlanners.includes(dataSet.customerID)
      })
      this.customerDataSource = this.filterService.getFilteredCustomerFilters(this.httpClient, 
        this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4",
         filteredCustomers
        )
    } else {
      if(this.globalPlanners.length > 0){
        this.customerDataSource = this.filterService.getFilteredCustomerFilters(this.httpClient, 
          this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4",
           this.globalPlanners
          )
      } else {
        this.customerDataSource = this.filterService.getCustomerFilters(this.httpClient, this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4")
      }
    }

    //Dynamic tooltip logic

    if(this.selectedProgramValue.length == 0){
      this.programTitle = "PROGRAMS"
    } else {
      this.programTitle = "PROGRAMS (" + this.selectedProgramValue.length + ")"
    }

    programRaw.map((obj: any) => {
      this.selectedPrograms.map((id: number) => {
        if(id == obj.programID){
          names.push(obj.programName)
        }
      })
    } )

    this.programNames = names

    console.log(this.selectedCustomerValue, '<-- selected customer value', this.selectedCustomers)
  }
  changePlannerDropdown() {
    let plannerRaw = this.plannerDataSource.__rawData;
    let names: any = []

    let customers: number[] = []
    this.selectedPlannerValue = this.selectedPlanners;
    let filteredSet = this.filteredDataset.filter((dataSet: any) => {
      return this.selectedPlanners.includes(dataSet.plannerID)
    })

    filteredSet.map((set: any) => {
      if(!customers.includes(set.customerID)){
        customers.push(set.customerID)
      }
    })
  // filter customers based on planner program selection
    let filteredCustomers = this.customerDataSource.__rawData.filter((dataSet: any) => {
      return customers.includes(dataSet.customerID)
    })

    this.customerDataSource.__rawData = this.customerDataSource.__rawData.filter((dataSet: any) => {
      return customers.includes(dataSet.customerID)
    })

    console.log(filteredCustomers)
    this.globalPlanners = filteredCustomers;
    if(customers.length > 0 ){
    //filter customers based on program and planner selection, if programs are selected
      this.customerDataSource = this.filterService.getFilteredCustomerFilters(this.httpClient, 
        this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4",
         filteredCustomers
        )
    } else {
      if(this.globalPrograms.length > 0 ){
        this.customerDataSource = this.filterService.getFilteredCustomerFilters(this.httpClient, 
          this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4",
           this.globalPrograms
          )
      } else {
        this.customerDataSource = this.filterService.getCustomerFilters(this.httpClient, this.baseUrl + "api/ApplicationFilter/GetAllFilters?locationID=4")
      }
    }

     //Dynamic tooltip logic

     if(this.selectedPlannerValue.length == 0){
      this.plannerTitle = "PLANNERS"
    } else {
      this.plannerTitle = "PLANNERS (" + this.selectedPlannerValue.length + ")"
    }

      plannerRaw.map((obj: any) => {
        this.selectedPlanners.map((id: number) => {
          if(id == obj.plannerID){
            names.push(obj.plannerName)
          }
        })
      } )

      this.plannerNames = names
  
 
  }
  changeFilterDropdown() {
  
    this.selectedFilterValue = this.selectedFilters;
  }
  
handleSubmit($event: any){
  console.log("submitted!")
  if(
    this.selectedCustomers.length == 0
    && this.selectedPrograms.length == 0
    && this.selectedPlanners.length == 0
  ) {
    this.isDisabled = true;
  } else {
    this.isDisabled = false;
  }

  let end = this.selectedDates.startDate.utc(String, String).toISOString();
  let start = this.selectedDates.endDate.utc(String, String).toISOString();
  // console.log( this.formatFilters(this.selectedCustomers, start, end, this.selectedPrograms, this.selectedPlanners), 'formatted data')
  this.filterService.changeFilterValue( this.formatFilters(this.selectedCustomers,  end, start, this.selectedPrograms, this.selectedPlanners))
}

formatFilters(customer: number[], startDate:any, endDate:any, program?: number[], planner?: number[]){
  let customerArr:any = [];
  let programArr:any = [];
  let plannerArr:any = [];
  let obj: any = {}

  customer.map((d) => {
    obj.customerID = d;
    customerArr.push(obj)
    obj = {}
  })

  if(program != null){
    program.map((d) => {
      obj.programID = d;
      programArr.push(obj)
      obj = {}
    })
  }

  if(planner != null){
    planner.map((d) => {
      obj.plannerID = d;
      plannerArr.push(obj)
      obj = {}
    })
  }

  let formattedFilter = {
    customers: customerArr,
    programs: programArr,
    planners: plannerArr,
    locationID:  4,
    endDate: endDate,
    startDate: startDate
  }

  return formattedFilter
}



clearFilter = () => {
  const _this = this
  this.selectedDates = null;
  this.selectedCustomers = []
  this.selectedProgramValue = []
  this.selectedCustomerValue = []
  this.selectedPlannerValue = []
  this.selectedPrograms = []
  this.selectedPlanners = []
  this.customerTitle = "CUSTOMERS"
  this.plannerTitle = "PLANNERS"
  this.programTitle = "PROGRAMS"
}

  
}