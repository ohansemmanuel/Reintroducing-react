import React, { Component } from 'react'
import User from '../components/User'
import TotalAmount from '../components/TotalAmount'
import WithdrawButton from '../components/WithdrawButton'
import Charity from '../components/Charity'
import photographer from '../images/girl.png'

import './App.css'

class App extends Component {
  state = {
    totalAmount: 2500701
  }
  render () {
    const { loggedInUser } = this.props

    return (
      <div className='App'>
        <User loggedInUser={loggedInUser} profilePic={photographer} />
        <TotalAmount totalAmount={loggedInUser.totalAmount} />

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
