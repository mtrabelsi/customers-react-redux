import expect from 'expect'
import reducer from './../reducer'
import { addCustomer, removeCustomer, updateCustomer } from './../actions'

const initState = {
  customers: [
    {
      customerID: 1,
      name: {
        first: 'first',
        last: 'last'
      }
    }
  ]
}
describe('Reducer function', () => {
  it('add action', () => {
      const action = addCustomer({
        name: {
          first: 'added first',
          last: 'added last'
        }
      })
      const expectedState = {
        customers: [
          {
            customerID: 1,
            name: {
              first: 'first',
              last: 'last'
            }
          },
          {
            customerID: 2,
            name: {
              first: 'added first',
              last: 'added last'
            }
          }
        ]
      }
      expect(reducer(initState, action)).toEqual(expectedState);
  })
  it('update action', () => {
      const action = updateCustomer({
        customerID: 1,
        name: {
          first: 'modified first',
          last: 'last'
        }
      }, 0)
      const expectedState = {
        customers: [
          {
            customerID: 1,
            name: {
              first: 'modified first',
              last: 'last'
            }
          }
        ]
      }
      expect(reducer(initState, action)).toEqual(expectedState);
  })
  it('remove action - when we have only 1 customer', () => {
      const action = removeCustomer(0)
      const expectedState = {
        customers: []
      }
      expect(reducer(initState, action)).toEqual(expectedState);
  })
  it('remove action - when we have only 1+ customer', () => {
      const action = removeCustomer(1)

      const customInitState = {
        customers: [
          {
            customerID: 1,
            name: {
              first: 'first 1',
              last: 'last 1'
            }
          },
          {
            customerID: 2,
            name: {
              first: 'first 2',
              last: 'last 2'
            }
          }
        ]
      }
      const expectedState = {
        customers: [
          {
            customerID: 1,
            name: {
              first: 'first 1',
              last: 'last 1'
            }
          }
        ]
      }
      expect(reducer(customInitState, action)).toEqual(expectedState);
  })
})
