import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (<div>
        <h2> Head component </h2>
        <ul>
          <li><Link to='/page1' activeStyle={{color: 'red'}}> Page1 </Link></li>
          <li><Link to='/page2' activeStyle={{color: 'red'}}> Page2 </Link></li>
        </ul>
        {this.props.children}
    </div>)
  }
})
