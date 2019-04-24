import React, { Fragment } from 'react'
import TotalAmount from './TotalAmount'

const ViewAccountBalance = ({ showBalance, loggedInUser, displayBalance }) => {
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
        <TotalAmount totalAmount={loggedInUser.totalAmount} />
      )}
    </Fragment>
  )
}

export default ViewAccountBalance
