import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarNav from './NavbarNav'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <NavbarBrand brandName='CloneHub' />
        <NavbarNav />
      </nav>
    )
  }
}

export default Navbar
