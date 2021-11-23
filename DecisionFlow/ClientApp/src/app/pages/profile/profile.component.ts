import { Component } from '@angular/core';
import ArrayStore from "devextreme/data/array_store";

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;
  isProfile = true;
  isEmail = false;
  isPassword = false; 
  isDropDownBoxOpened = false;
  selected: any;

  customers = [
    { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
    { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" },
    // ...
  ];
  customerDataSource = new ArrayStore({
      data: this.customers,
      key: "ID"
  });
  selectedCustomers: any = [];
  selectedValue = this.selectedCustomers[0];
  changeDropDownBoxValue() {
     
      this.selectedValue = this.selectedCustomers[0];
      this.isDropDownBoxOpened = false;
  }

  longtabs: any[] = [
    { text: "Profile" },
    { text: "Password" }
];

  buttonOptions: any = {
    text: "Save",
    type: "success",
    useSubmitBehavior: true
  }

  constructor() {
    this.employee = {
      UserName: 'Andy Nguyen',
      PhoneNumber: '3',
      Email: 'anguyen@optimumcs.com'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

  itemClick($event: any){
   console.log($event.itemData.text)
    if($event.itemData.text == "Email"){
      this.isEmail = true;
      this.isProfile = false;
      this.isPassword = false;
    } 
    if($event.itemData.text == "Password"){
      this.isEmail = false;
      this.isProfile = false;
      this.isPassword = true;
    } 
    if($event.itemData.text == "Profile"){
      this.isEmail = false;
      this.isProfile = true;
      this.isPassword = false;
    } 

    console.log(this.isProfile, 'profile', this.isEmail, 'email', this.isPassword, 'password')

  }
}
