function addCustomer(customer) {
  return {
    type: 'ADD_CUSTOMER',
    customer: customer
  }
}

function removeCustomer(index) {
  return {
    type: 'REMOVE_CUSTOMER',
    index: index
  }
}

function updateCustomer(customer, index) {
  return {
    type: 'UPDATE_CUSTOMER',
    index: index,
    customer: customer
  }
}

export {
  addCustomer,
  removeCustomer
}
