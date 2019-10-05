import React, { Component } from 'react'

class FormInput extends Component {
  render () {
    return (
      <div className='form-group'>
        <label for='exampleInputEmail1'>
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          aria-describedby={this.props.ariaDescribedBy}
          className='form-control'
          type={this.props.type}
          placeholder={this.props.placeholder}
          aria-label={this.props.ariaLabel}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default FormInput