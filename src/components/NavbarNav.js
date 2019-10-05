import React, { Component } from 'react'

import NavItem from './NavItem'

class NavbarNav extends Component {
  render () {
    return (
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <NavItem to='/' title='Repositories' />
          <NavItem to='/create-repo' title='Create Repository' />
        </ul>
      </div>
    )
  }
}

export default NavbarNav
