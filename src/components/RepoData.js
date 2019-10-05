import React, { Component } from 'react'

class RepoData extends Component {
  render () {
    return (
      <div className='card-body'>
        <h5 className='card-title'>
          {this.props.name}
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {this.props.owner}
        </h6>
        <p className='card-text'>
          {this.props.description}
        </p>
        <a href={this.props.link} className='card-link' target='__blank'>
          Go To Repo
        </a>
      </div>
    )
  }
}

export default RepoData
