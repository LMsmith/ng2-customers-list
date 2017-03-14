import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerDataService } from './customer-data.service';
declare var $:any;

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

    updateCustomer(customer) {
        this.customerDataService.updateCustomerById(customer.id, customer);
    }

    get customers() {
        return this.customerDataService.getAllCustomers();
    }

    openCustomerForm() {
        $('.customer-form').removeClass('hidden');
    }

    closeCustomerForm() {
        $('.customer-form').addClass('hidden');
    }

    makeEditable(id) {
        let customerItem ='.customer-item-' +id.toString();
        $(customerItem).find('input').attr('readonly', false);
    }

    cancelEdit(id) {
        let customerItem ='.customer-item-' +id.toString();
        let customerButtons ='.customer-item' +id.toString();
        $(customerItem).find('input').attr('readonly', true);
        $(customerButtons).addClass('hidden');
    }
}
