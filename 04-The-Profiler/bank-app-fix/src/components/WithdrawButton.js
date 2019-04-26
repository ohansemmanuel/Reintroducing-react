import React, { memo } from 'react'
import formatNumber from 'format-number'
import { UserConsumer } from '../context/UserContext'

const WithdrawButton = memo(({ amount }) => {
  return (
    <UserConsumer>
      {({ handleWithdrawal }) => (
        <button
          data-amount={amount}
          className='App__button'
          onClick={handleWithdrawal}
        >
          WITHDRAW {formatNumber({ prefix: '$' })(amount)}
        </button>
      )}
    </UserConsumer>
  )
})

WithdrawButton.displayName = 'WithdrawButton'
export default WithdrawButton
