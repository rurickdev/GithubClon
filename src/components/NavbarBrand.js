import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarBrand extends Component {
  render () {
    return (
      <Link className='navbar-brand' to='/'>
        {this.props.brandName}
      </Link>
    )
  }
}

export default NavbarBrand
