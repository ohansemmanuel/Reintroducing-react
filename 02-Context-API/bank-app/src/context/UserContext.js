import React, { createContext, Component } from 'react'
import { USER } from '../api'

const { Provider, Consumer } = createContext()

class UserProvider extends Component {
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
    return (
      <Provider
        value={{
          user: loggedInUser,
          handleLogin: this.handleLogin
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserProvider as default, Consumer as UserConsumer }
