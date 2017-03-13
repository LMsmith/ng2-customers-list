import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerDataService } from './customer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerDataService]
})
export class AppComponent {
    newCustomer: Customer = new Customer();
    constructor(private customerDataService: CustomerDataService){}

    addCustomer() {
        this.customerDataService.addCustomer(this.newCustomer);
        this.newCustomer = new Customer();
    }

    removeCustomer(customer) {
        this.customerDataService.deleteCustomerById(customer.id);
    }

    get customers() {
        return this.customerDataService.getAllCustomers();
    }
}
