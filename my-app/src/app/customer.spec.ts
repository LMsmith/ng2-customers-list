import {Customer} from './customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
      let customer = new Customer({
          name: 'Alfred',
          email: 'alfred@aol.com',
          telephone: '555-555-5555',
          street: '15 Main St',
          city: 'Providence',
          state: 'RI',
          zip: '02903'
      });
      expect(customer.name).toEqual('Alfred');
      expect(customer.email).toEqual('alfred@aol.com');
      expect(customer.telephone).toEqual('555-555-5555');
      expect(customer.street).toEqual('15 Main St');
      expect(customer.city).toEqual('Providence');
      expect(customer.state).toEqual('RI');
      expect(customer.zip).toEqual('02903');
  });
});
