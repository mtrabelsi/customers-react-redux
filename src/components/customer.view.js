import React from 'react'

class CustomerView extends React.Component {
    constructor(props) {
        super(props)
        this.customer = this.props.customers[this.props.params.customer]
        this.onChange = this.onChange.bind(this)
        this.state = {
            name: {
              first: this.customer.name.first,
              last: this.customer.name.last
            },
            birthday: this.customer.birthday,
            gender: this.customer.gender,
            customerLifetimeValue: this.customer.customerLifetimeValue
        }
    }
    onChange(elm) {
      const inputValue = elm.target.value
      switch (elm.target.name) {
        case 'firstName':
            this.setState((prevState) => ({
              name: {
                first: inputValue,
                last: prevState.name.last
              }
            }))
          break;
          case 'lastName':
              this.setState((prevState) => ({
                name: {
                  first: prevState.name.first,
                  last: inputValue
                }
              }))
            break;
          case 'gender':
              this.setState({
                gender: inputValue
              })
            break;
          case 'lifeTime':
              this.setState({
                customerLifetimeValue: inputValue
              })
            break;
          case 'birthday':
              this.setState({
                birthday: inputValue
              })
            break;
        default:

      }
    }
    render() {
      return <div>
          <form>
            <input type="text" name="firstName" onChange={this.onChange} value={this.state.name.first} />
            <input type="text" name="lastName" onChange={this.onChange} value={this.state.name.last} />
            <input name="birthday" onChange={this.onChange} value={this.state.birthday} type="date" />
            <select name="gender" onChange={this.onChange} value={this.state.gender}>
              <option value="m">m</option>
              <option value="w">w</option>
            </select>
            <input type="text" name="lifeTime" onChange={this.onChange} value={this.state.customerLifetimeValue} />
          </form>
      </div>
    }
}

export default CustomerView
