import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './views/HomePage'
import CreateRepoPage from './views/CreateRepoPage'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/create-repo' exact>
            <CreateRepoPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
