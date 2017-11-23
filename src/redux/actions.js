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

export {
  addCustomer,
  removeCustomer
}
