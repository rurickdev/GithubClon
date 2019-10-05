import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TitleAndDescription from '../components/TitleAndDescription'
import FromCreateRepository from '../components/FormCreateRepository'

class CreateRepoPage extends Component {
  render () {
    return (
      <fragment>
        <Navbar />
        <div className='container pt-5'>
          <Card>
            <TitleAndDescription
              title='Create a new repository'
              description='A repository contains all project files, including the revision history. Already have a project repository elsewhere? Import a repository.'
            />
          </Card>
          <Card>
            <FromCreateRepository />
          </Card>
        </div>
      </fragment>
    )
  }
}

export default CreateRepoPage
