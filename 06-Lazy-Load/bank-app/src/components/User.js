import React, { memo } from 'react'
import Greeting from './Greeting'

const User = memo(({ profilePic }) => {
  return (
    <div>
      <img className='App__userpic' src={profilePic} alt='user' />
      <Greeting />
    </div>
  )
})

User.displayName = 'User'
export default User
