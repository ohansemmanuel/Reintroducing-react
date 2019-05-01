import React from 'react'
import useExpanded, { useEffectAfterMount } from './components/Expandable'
import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'
import './components/Expandable.css'

function WithoutComponents () {
  const { expanded, getTogglerProps } = useExpanded()

  useEffectAfterMount(
    () => {
      console.log('Yay! button was clicked!!')
    },
    [expanded]
  )

  const customClickHandler = () => {
    console.log('custom click handler!!!!!')
  }

  return (
    <div style={{ marginTop: '3rem' }}>
      <button
        {...getTogglerProps({
          id: 'my-btn-id',
          'aria-label': 'custom toggler',
          onClick: customClickHandler
        })}
      >
        Click to view awesomeness...
      </button>
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

// eslint-disable-next-line no-unused-vars
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
