import React from 'react'
import formatNumber from 'format-number'

const TotalAmount = ({ totalAmount }) => {
  return (
    <div className='App__amount'>
      {formatNumber({ prefix: '$' })(totalAmount)}
      <p className='App__amount--info'>Total Amount</p>
    </div>
  )
}

export default TotalAmount
