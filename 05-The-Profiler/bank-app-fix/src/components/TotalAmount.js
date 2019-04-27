import React from 'react'
import FormatAmount from './FormatAmount'

const TotalAmount = ({ totalAmount }) => {
  return (
    <div className='App__amount'>
      <FormatAmount totalAmount={totalAmount} />
      <p className='App__amount--info'>Total Amount</p>
    </div>
  )
}

export default TotalAmount
