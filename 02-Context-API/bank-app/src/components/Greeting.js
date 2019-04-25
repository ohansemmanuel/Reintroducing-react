import React from 'react'
import { UserConsumer } from '../context/UserContext'

const Greeting = () => {
  return (
    <UserConsumer>
      {({ user }) => <p className='App__greeting'>Welcome, {user.name}! </p>}
    </UserConsumer>
  )
}

export default Greeting
