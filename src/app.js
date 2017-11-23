import React from 'react'
import { render } from 'react-dom'
import { Router, Route , browserHistory} from 'react-router'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
// these are our connected redux components
import CustomersListLive from './redux/customersList.container'
import CustomerViewLive from './redux/customer.container'
// a dumb component shown when the page doesn't exist
import NotFound from './components/notfound'
// Reducer is the Immuatable global function responsible for calculating the next state
import Reducer from './redux/reducer'
import './app.css'

// creating a logger to logout dispatched actions
const loggerMiddleware = createLogger()
// Store for redux state
const store = createStore(Reducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);
// main rendering
render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={CustomersListLive} />
            <Route path="/customer/:customer" component={CustomerViewLive}/>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>
), document.getElementById('root'))
