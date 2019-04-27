import React, { Suspense } from 'react'
import Login from './containers/Login'
import UserProvider, { UserConsumer } from './context/UserContext'

const App = React.lazy(() => import('./containers/App'))

const Root = () => (
  <UserProvider>
    <UserConsumer>
      {({ user, handleLogin }) =>
        user ? (
          <Suspense fallback='loading..'>
            <App />
          </Suspense>
        ) : (
          <Login handleLogin={handleLogin} />
        )
      }
    </UserConsumer>
  </UserProvider>
)
export default Root
