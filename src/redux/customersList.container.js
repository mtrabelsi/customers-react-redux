import React from 'react'
import { connect } from 'react-redux'
import CustomersList from './../components/customer.list'
import { addCustomer, removeCustomer } from './actions'

const mapStateToProps = (state) => ({
   customers: state.customers
})

const mapDispatchToProps = dispatch => ({
  removeCustomer: (index) => dispatch(removeCustomer(index))
})

const ConnectedCustomersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersList)

export default ConnectedCustomersList
