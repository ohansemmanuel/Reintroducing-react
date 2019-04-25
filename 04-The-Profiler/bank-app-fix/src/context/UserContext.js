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

  handleWithdrawal = evt => {
    const { name, totalAmount } = this.state.loggedInUser
    const withdrawalAmount = evt.target.dataset.amount

    this.setState({
      loggedInUser: {
        name,
        totalAmount: totalAmount - withdrawalAmount
      }
    })
  }

  render () {
    const { loggedInUser } = this.state
    return (
      <Provider
        value={{
          user: loggedInUser,
          handleLogin: this.handleLogin,
          handleWithdrawal: this.handleWithdrawal
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserProvider as default, Consumer as UserConsumer }
