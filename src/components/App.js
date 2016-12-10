import React, { Component } from 'react'
import Dashboard from './Dashboard'
import '../styles/home_body.css'
import '../styles/home_nav.css'
import '../styles/button.css'

class App extends Component {
  render () {
    return (
      <div className='home-page-wrapper'>
        <Dashboard/>
      </div>
    )
  }
}

export default App
