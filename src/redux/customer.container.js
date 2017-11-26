import React from 'react'
import { connect } from 'react-redux'
import CustomerView from './../components/customer.view'

const mapStateToProps = (state) => ({
    customers: state.customers
})

const mapDispatchToProps = (dispatch) => ({
  updateCustomer: (customer, index) => console.log('simple action')
})

const ConnectedCustomerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerView)

export default ConnectedCustomerView
