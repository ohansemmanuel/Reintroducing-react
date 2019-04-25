import React, { Fragment } from 'react'
import TotalAmount from './TotalAmount'
import { UserConsumer } from '../context/UserContext'

const ViewAccountBalance = ({ showBalance, displayBalance }) => {
  return (
    <Fragment>
      {!showBalance ? (
        <div>
          <p className='App__showBalance'>
            Would you love to view your account balance?{' '}
          </p>
          <button onClick={displayBalance} className='App__showBalanceCTA'>
            Yes
          </button>
        </div>
      ) : (
        <UserConsumer>
          {({ user }) => <TotalAmount totalAmount={user.totalAmount} />}
        </UserConsumer>
      )}
    </Fragment>
  )
}

export default ViewAccountBalance
