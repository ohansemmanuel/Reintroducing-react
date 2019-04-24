import React, { Component } from 'react'
import User from '../components/User'
import TotalAmount from '../components/TotalAmount'
import WithdrawButton from '../components/WithdrawButton'
import Charity from '../components/Charity'
import photographer from '../images/girl.png'

import './App.css'
import ViewAccountBalance from '../components/ViewAccountBalance'

class App extends Component {
  state = {
    showBalance: false
  }

  displayBalance = () => {
    this.setState({ showBalance: true })
  }
  render () {
    const { loggedInUser } = this.props
    const { showBalance } = this.state

    return (
      <div className='App'>
        <User loggedInUser={loggedInUser} profilePic={photographer} />
        <ViewAccountBalance
          showBalance={showBalance}
          loggedInUser={loggedInUser}
          displayBalance={this.displayBalance}
        />

        <section>
          <WithdrawButton amount={10000} />
          <WithdrawButton amount={5000} />
        </section>

        <Charity />
      </div>
    )
  }
}

export default App
