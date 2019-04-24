import React from 'react'

const Greeting = ({ loggedInUser }) => {
  return <p className='App__username'>Hello, {loggedInUser.name}! </p>
}

export default Greeting
