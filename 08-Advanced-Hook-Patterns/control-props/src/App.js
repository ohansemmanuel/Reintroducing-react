import React from 'react'
import './App.css'
import Expandable from './components/Expandable'

const information = [
  {
    header: 'Why everyone should live forrever',
    note: 'This is highly sensitive information on how to prevent death!!!!'
  },
  {
    header: 'The internet disappears',
    note:
      'I just uncovered the biggest threat to the internet. The internet disappears in 301 seconds. Save yourself'
  },
  {
    header: 'The truth about Elon musk and Mars!',
    note: 'Nobody tells you this. Elon musk ... News coming soon.'
  }
]

function App () {
  return (
    <div className='App'>
      {information.map(({ header, note }, index) => (
        <Expandable key={index}>
          <Expandable.Header style={{ color: 'red', border: '1px solid teal' }}>
            {header}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  )
}

export default App
