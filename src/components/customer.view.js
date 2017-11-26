import React from 'react'

class CustomerView extends React.Component {
    constructor(props) {
        super(props)
        const tmpCustomer = this.props.customers[this.props.params.customer]
        this.tmpState = tmpCustomer ? {
            isNew: false,
            customer: tmpCustomer
          } : {
            isNew: true,
            customer: {
              name: {
              first: '',
              last: ''
            },
            birthday: '',
            gender: 'm',
            customerLifetimeValue: 0
          }
        }

        this.onChange = this.onChange.bind(this)
        this.updateCustomer = this.updateCustomer.bind(this)
        this.state = this.tmpState
        this.goHome = this.goHome.bind(this)
    }
    updateCustomer() {
      if(this.state.isNew) { // new customer
          this.props.addCustomer(this.state.customer)
      } else { // update for existing one
          this.props.updateCustomer(this.state.customer, this.props.params.customer)
      }
      // always redirect after any operation
      this.props.router.push(`/`)
    }
    goHome() {
      this.props.router.push('/')
    }
    onChange(elm) {
      const inputValue = elm.target.value
      switch (elm.target.name) {
        case 'firstName':
            this.setState((prevState) => ({
              customer: {
                  ...prevState.customer,
                  name: {
                    first: inputValue,
                    last: prevState.customer.name.last
                  }
              }
            }))
          break;
          case 'lastName':
              this.setState((prevState) => ({
                customer: {
                  ...prevState.customer,
                  name: {
                    first: prevState.customer.name.first,
                    last: inputValue
                  }
                }
              }))
            break;
          case 'gender':
              this.setState({
                customer: {
                  ...this.state.customer,
                  gender: inputValue
                }
              })
            break;
          case 'lifeTime':
              this.setState({
                customer: {
                  ...this.state.customer,
                  customerLifetimeValue: inputValue
                }
              })
            break;
          case 'birthday':
              this.setState({
                customer: {
                  ...this.state.customer,
                  birthday: inputValue
                }
              })
            break;
        default:

      }
    }
    render() {
      return <div className="app__customer-view">
            <input className="form-control" type="text" name="firstName" onChange={this.onChange} value={this.state.customer.name.first} />
            <input className="form-control" type="text" name="lastName" onChange={this.onChange} value={this.state.customer.name.last} />
            <input className="form-control" name="birthday" onChange={this.onChange} value={this.state.customer.birthday} type="date" />
            <select className="form-control" name="gender" onChange={this.onChange} value={this.state.customer.gender}>
              <option value="m">m</option>
              <option value="w">w</option>
            </select>
            <input className="form-control" type="text" name="lifeTime" onChange={this.onChange} value={this.state.customer.customerLifetimeValue} />
            <div className="app__button-container app__button-container--two">
              <button className="btn btn-danger" onClick={this.goHome}>
                <i className="fa fa-home" aria-hidden="true"/>
              </button>
              <button className="btn btn-primary" onClick={this.updateCustomer}>Submit</button>
            </div>
      </div>
    }
}

export default CustomerView
