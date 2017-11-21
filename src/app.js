import React from 'react'
import {render} from 'react-dom'
import { Router, Route , hashHistory} from 'react-router'

import App from './modules/App'
import Page1 from './modules/page1'
import Page2 from './modules/page2'
import NotFound from './modules/notfound'


render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="*" component={NotFound}/>
      </Route>
  </Router>
), document.getElementById('root'))
