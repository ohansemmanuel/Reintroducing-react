import React from 'react'

const Greeting = ({ loggedInUser }) => {
  return <p className='App__greeting'>Welcome, {loggedInUser.name}! </p>
}

export default Greeting
