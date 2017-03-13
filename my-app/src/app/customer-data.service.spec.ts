import { TestBed, inject } from '@angular/core/testing';
import { Customer } from './customer';
import { CustomerDataService } from './customer-data.service';

describe('CustomerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDataService]
    });
  });

  it('should ...', inject([CustomerDataService], (service: CustomerDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllCustomers()', () => {
      it('should return an empty array by default', inject([CustomerDataService], (service: CustomerDataService) => {
          expect(service.getAllCustomers()).toEqual([]);
      }));

      it('should return all customers', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer1 = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          let customer2 = new Customer({name: 'Carlos', email: 'carlos@aol.com', telephone: '222-222-2222', street: '99 Infinite Loop', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer1);
          service.addCustomer(customer2);
          expect(service.getAllCustomers()).toEqual([customer1, customer2]);
      }));
  });

  describe('#save(customer)', () => {
      it('should automatically assign an incrementing id', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer1 = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          let customer2 = new Customer({name: 'Carlos', email: 'carlos@aol.com', telephone: '222-222-2222', street: '99 Infinite Loop', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer1);
          service.addCustomer(customer2);
          expect(service.getCustomerById(1)).toEqual(customer1);
          expect(service.getCustomerById(2)).toEqual(customer2);
      }));
  });

  describe('#deleteCustomerById(id)', () => {
      it('should remove customer with the corresponding id', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer1 = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          let customer2 = new Customer({name: 'Carlos', email: 'carlos@aol.com', telephone: '222-222-2222', street: '99 Infinite Loop', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer1);
          service.addCustomer(customer2);
          expect(service.getAllCustomers()).toEqual([customer1, customer2]);
          service.deleteCustomerById(1);
          expect(service.getAllCustomers()).toEqual([customer2]);
          service.deleteCustomerById(2);
          expect(service.getAllCustomers()).toEqual([]);
      }));

      it('should not remove anything if customer with the corresponding id is not found', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer1 = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          let customer2 = new Customer({name: 'Carlos', email: 'carlos@aol.com', telephone: '222-222-2222', street: '99 Infinite Loop', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer1);
          service.addCustomer(customer2);
          expect(service.getAllCustomers()).toEqual([customer1, customer2]);
          service.deleteCustomerById(3);
          expect(service.getAllCustomers()).toEqual([customer1, customer2]);
      }));
  });

  describe('#updateCustomerById(id, values)', () => {
      it('should return customer with the corresponding id and updated values', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer);
          let updatedCustomer = service.updateCustomerById(1, { street: '123 West Avenue' });
          expect(updatedCustomer.street).toEqual('123 West Avenue');
      }));

      it('should return null if customer is not found', inject([CustomerDataService], (service: CustomerDataService) => {
          let customer = new Customer({name: 'Brenda', email: 'brenda@aol.com', telephone: '111-111-1111', street: '11 Test Street', city: 'Providence', state: 'RI', zip: '02903'});
          service.addCustomer(customer);
          let updatedCustomer = service.updateCustomerById(2, { street: '123 West Avenue' });
          expect(updatedCustomer).toEqual(null);
      }));
  });
});