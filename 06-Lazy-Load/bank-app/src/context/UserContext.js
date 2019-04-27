import React, { createContext, Component } from 'react'
import { USER } from '../api'

const { Provider, Consumer } = createContext()

class UserProvider extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      handleLogin: this.handleLogin,
      handleWithdrawal: this.handleWithdrawal
    }
  }

  handleLogin = evt => {
    evt.preventDefault()
    this.setState({
      user: USER
    })
  }

  handleWithdrawal = evt => {
    const { name, totalAmount } = this.state.user
    const withdrawalAmount = evt.target.dataset.amount

    this.setState({
      user: {
        name,
        totalAmount: totalAmount - withdrawalAmount
      }
    })
  }

  render () {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { UserProvider as default, Consumer as UserConsumer }
