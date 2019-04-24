import React, { Component } from 'react'
import App from './containers/App'
import Login from './containers/Login'
import { USER } from './api'

class Root extends Component {
  state = {
    loggedInUser: null
  }

  handleLogin = evt => {
    evt.preventDefault()
    this.setState({
      loggedInUser: USER
    })
  }

  render () {
    const { loggedInUser } = this.state

    return loggedInUser ? (
      <App loggedInUser={loggedInUser} />
    ) : (
      <Login handleLogin={this.handleLogin} />
    )
  }
}

export default Root
