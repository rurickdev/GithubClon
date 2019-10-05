import React, { Component } from 'react'

class TitleAndDescription extends Component {
  render () {
    return (
      <fragment>
        <h5 className='card-title'>
          {this.props.title}
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {this.props.description}
        </h6>
      </fragment>
    )
  }
}

export default TitleAndDescription
