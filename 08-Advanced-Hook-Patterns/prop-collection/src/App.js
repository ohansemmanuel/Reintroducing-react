import React from 'react'
import './App.css'
import Expandable from './components/Expandable'

function App () {
  return (
    <div className='App'>
      <Expandable>
        <Expandable.Header>React hooks</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>Hooks are awesome</Expandable.Body>
      </Expandable>
    </div>
  )
}

export default App
