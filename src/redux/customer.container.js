import React from 'react'
import { connect } from 'react-redux'
import CustomerView from './../components/customer.view'
import { updateCustomer, addCustomer } from './actions'

const mapStateToProps = (state) => ({
    customers: state.customers
})

const mapDispatchToProps = (dispatch) => ({
  updateCustomer: (customer, index) =>
    dispatch(updateCustomer(customer, index)),
  addCustomer: (customer) => dispatch(addCustomer(customer))
})

const ConnectedCustomerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerView)

export default ConnectedCustomerView
