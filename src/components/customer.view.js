import React from 'react'

class CustomerView extends React.Component {
    render() {
      return <div>Page 1 content {this.props.params.customer}</div>
    }
}

export default CustomerView
