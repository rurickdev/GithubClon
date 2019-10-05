import React, { Component } from 'react'

class FormCheck extends Component {
  constructor(props) {
    super(props)
    console.log('props:', props)
    this.state = {
      isChecked: false
    }
  }

  toggleCheckActive () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    return (
      <div className='form-group form-check'>
        <input
          onChange={this.toggleCheckActive.bind(this)}
          className='form-check-input'
          type='checkbox'
          checked={this.state.isChecked}
          value=''
          id={this.props.id}
        />
        <label
          className='form-check-label'
          for={this.props.id}
        >
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default FormCheck
