import React from 'react'
import formatNumber from 'format-number'

const WithdrawButton = ({ amount }) => {
  return (
    <button data-amount='10000' className='App__button'>
      WITHDRAW {formatNumber({ prefix: '$' })(amount)}
    </button>
  )
}

export default WithdrawButton
