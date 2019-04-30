import React from 'react'
import useExpanded, { useEffectAfterMount } from './components/Expandable'
import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'
import './components/Expandable.css'

function WithoutComponents () {
  const { expanded, toggle } = useExpanded()

  useEffectAfterMount(
    () => {
      console.log('Yay! button was clicked!!')
    },
    [expanded]
  )

  return (
    <div style={{ marginTop: '3rem' }}>
      <button onClick={toggle}>Click to view awesomeness...</button>
      {expanded ? <p>{'😎'.repeat(50)}</p> : null}
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      <WithoutComponents />

      {/* uncomment to see default UI */}
      {/* <WithComponent /> */}
    </div>
  )
}

function WithComponent () {
  const { expanded, toggle } = useExpanded()
  return (
    <div className='Expandable'>
      <Header toggle={toggle}>Awesome Hooks </Header>
      <Icon expanded={expanded} />
      <Body expanded={expanded}>React hooks is awesome!</Body>
    </div>
  )
}

export default App
