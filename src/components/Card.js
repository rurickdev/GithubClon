import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card border-top-0 border-right-0 border-left-0'>
        <div className='card-body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card