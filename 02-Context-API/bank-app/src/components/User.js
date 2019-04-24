import React from 'react'
import Greeting from './Greeting'

const User = ({ loggedInUser, profilePic }) => {
  return (
    <div>
      <img className='App__userpic' src={profilePic} alt='user' />
      <Greeting loggedInUser={loggedInUser} />
    </div>
  )
}

export default User
