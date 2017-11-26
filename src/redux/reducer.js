import initState from './../json/customers.json'

function reducer(state = { customers: initState }, action) {
  switch (action.type) {
    case 'UPDATE_CUSTOMER':
      return {
          customers: [
            ...state.customers,
            [
              action.customer
            ]
          ]
      }
    case 'ADD_CUSTOMER':
      return state.customers.concat([action.customer])
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
