import React, { Component } from 'react'
import HomeNavDropdownMenu from './HomeNavDropdownMenu'
import HomeNavHamburger from './HomeNavHamburger'

import '../styles/home_nav.css'
import '../styles/home_nav_dropdown_menu.css'

class HomeNav extends Component {

  render () {
    return (
      <nav className='home-nav clearfix'>
        <div className='nav-container'>
          <div className='home-nav-left'>
            <a className='logo' href='#'>
              <div className='logo-green-square'>
                <div>D</div>
              </div>
              <img src='/images/logo.svg' role='presentation' />
            </a>
          </div>

          <div className='home-nav-right'>
            <div className='home-nav-menu'>
              <a className='home-nav-grey' href='#'>product</a>
              <a className='home-nav-grey' href='#'>PRICING</a>
              <a className='home-nav-grey' href='#'>BLOG</a>
              <div className='nav-dropdown'>
                <HomeNavMenuDropdownButton />
              </div>
              <a className='login-nav' href='#'>LOGIN</a>
              <a className='demo-button' href='#'>BOOK A DEMO</a>
              <form action='/register'>
                <input
                  className='trial-input'
                  name="email"
                  type='text'
                  placeholder='Email address' />
                <input
                className='nav-trial-button'
                type="submit"
                value="FREE TRIAL" />
              </form>
            </div>
          </div>
          <HomeNavHamburger />
        </div>
      </nav>
    )
  }
}

const HomeNavMenuDropdownButton = React.createClass({
  getInitialState () {
    return {
      isOpen: false
    }
  },

  toggleMenu (event) {
    // event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
  },

  onClose () {
    this.setState({isOpen: false})
  },

  componentDidMount () {
    document.body.addEventListener('click', this.onClose)
  },

  componentWillUnmount () {
    document.body.removeEventListener('click', this.onClose)
  },

  render () {
    return <div>
      <a onClick={this.toggleMenu} href='#'>More
          <div className='more-triangle' />
      </a>
      <HomeNavDropdownMenu isOpen={this.state.isOpen} />
    </div>
  }
})

export default HomeNav
