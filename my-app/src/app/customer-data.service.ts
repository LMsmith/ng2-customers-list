import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerDataService {

// placeholder for last ID number
lastId: number = 0;

// placeholder for customers
customers: Customer[] = [];

  constructor() { }

  // simulate POST /customers
  addCustomer(customer: Customer): CustomerDataService {
      if(!customer.id) {
          customer.id = ++this.lastId;
      }
      this.customers.push(customer)
      return this;
  }

  // simulate DELETE /customers/:id
  deleteCustomerById(id: number): CustomerDataService {
      this.customers = this.customers.filter(customer => customer.id !== id);
      return this;
  }

    // simulate PUT /customers/:id
    updateCustomerById(id: number, values: Object = {}): Customer {
        let customer = this.getCustomerById(id);
        if(!customer) {
            return null;
        }
        Object.assign(customer, values);
        return customer;
    }

  // simulate GET /customers
  getAllCustomers(): Customer[] {
      return this.customers;
  }

  // simulate GET /customers/:id
  getCustomerById(id: number): Customer {
      return this.customers.filter(customer => customer.id === id).pop();
  }

}
