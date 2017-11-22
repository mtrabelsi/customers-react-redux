import React from 'react'
import { render } from 'react-dom'
import { Router, Route , browserHistory} from 'react-router'

import './app.css'
import CustomersList from './components/customer.list'
import CustomerView from './components/customer.view'
import NotFound from './components/notfound'

render((
  <Router history={browserHistory}>
      <Route path="/" component={CustomersList} />
      <Route path="/customer/:customer" component={CustomerView}/>
      <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'))
