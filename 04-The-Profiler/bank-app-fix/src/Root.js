import React from 'react'
import App from './containers/App'
import Login from './containers/Login'
import UserProvider, { UserConsumer } from './context/UserContext'

const Root = () => (
  <UserProvider>
    <UserConsumer>
      {({ user, handleLogin }) =>
        user ? <App /> : <Login handleLogin={handleLogin} />
      }
    </UserConsumer>
  </UserProvider>
)
export default Root
