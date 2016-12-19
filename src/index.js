import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import reducer from './reducers'
import RegistrationForm from './components/RegistrationForm'

import './styles/index.css'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='/register' component={RegistrationForm} />
    </Router>
  </Provider>
), document.getElementById('root'))
