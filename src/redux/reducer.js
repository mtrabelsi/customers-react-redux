import initState from './../json/customers.json'

function reducer(state = { customers: initState }, action) {
  switch (action.type) {
    case 'UPDATE_CUSTOMER':
      return {
          customers: [
            ...state.customers.slice(0, Number(action.index)),
            ...[action.customer],
            ...state.customers.slice(Number(action.index) + 1)
          ]
      }
    case 'ADD_CUSTOMER':
      return {
          customers: state.customers.concat([{...action.customer,
              customerID: state.customers.length + 1
            }])
      }
    case 'REMOVE_CUSTOMER':
      return {
          customers: [
            ...state.customers.slice(0, action.index),
            ...state.customers.slice(action.index + 1)
          ]
        }
    default:
      return state
  }
}

export default reducer
