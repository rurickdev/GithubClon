import React, { Component } from 'react'

import FormCheck from './FormCheck'
import FormInput from './FormInput'
import Button from './Button'

class FromCreateRepository extends Component {
  onSubmitHandler (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <FormInput
          id='repoName'
          aria-describedby='nameHelp'
          type='text'
          placeholder='Enter Repository Name'
          aria-label='Repository Name'
          label='Repository Name'
        />
        <FormCheck
          id='checkbox1'
          label='Public Repository'
        />
        <div className='d-flex flex-row-reverse'>
          <Button />
        </div>
      </form>
    )
  }
}

export default FromCreateRepository