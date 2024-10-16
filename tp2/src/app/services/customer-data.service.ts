import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private customerData: any = null;

  setCustomerData(data: any) {
    this.customerData = data;
  }

  getCustomerData() {
    return this.customerData;
  }
}
