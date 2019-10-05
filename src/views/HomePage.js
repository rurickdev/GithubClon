import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import RepoData from '../components/RepoData'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositories: []
    }
  }

  async componentWillMount () {
    const response = await fetch('https://api.github.com/repositories', {
      method: 'GET'
    })
    const parsedJson = await response.json()
    this.setState({
      repositories: parsedJson
    })
  }

  render () {
    return (
      <fragment>
        <Navbar />
        <div className='container pt5'>
          {this.state.repositories.map(repository => (
            <Card key={repository.id}>
              <RepoData
                name={repository.name}
                owner={repository.owner.login}
                description={repository.description}
                link={repository.html_url}
              />
            </Card>
          ))}
        </div>
      </fragment>
    )
  }
}

export default HomePage
