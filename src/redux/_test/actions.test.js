import expect from 'expect'
import { addCustomer, removeCustomer, updateCustomer } from './../actions'

describe('Actions generators', () => {
  it('add', () => {
    const customer = {key:'val'}
    const ExpectedAction = {
      type: 'ADD_CUSTOMER',
      customer: customer
    }
    expect(addCustomer(customer)).toEqual(ExpectedAction);
  });
  it('remove', () => {
    const index = 4
    const ExpectedAction = {
      type: 'REMOVE_CUSTOMER',
      index: index
    }
    expect(removeCustomer(index)).toEqual(ExpectedAction);
  });
  it('update', () => {
    const customer = {key:'val'}
    const index = 3
    const ExpectedAction = {
      type: 'UPDATE_CUSTOMER',
      customer: customer,
      index: index
    }
    expect(updateCustomer(customer, index)).toEqual(ExpectedAction);
  });
});
