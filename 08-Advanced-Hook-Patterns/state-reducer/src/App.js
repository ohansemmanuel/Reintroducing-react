import React from 'react'
import useExpanded, { useEffectAfterMount } from './components/Expandable'
import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'
import './components/Expandable.css'

/**
 * useExpanded consumer builds an App to share a conspiracy.
 * Goal:
 * - after the user clicks to see the conspiracy ...
 * - the reset callback should be invoked
 * - the user should NOT be able to expand the container any longer
 * - the secret can only be viewed ONCE!!!
 */

function App () {
  const { expanded, toggle, reset, resetDep } = useExpanded(false, appReducer)
  function appReducer (currentInternalState, actionAndChanges) {
    if (resetDep) {
      return
    }
    return {
      ...actionAndChanges.changes,
      // override internal update
      expanded: false
    }
  }

  useEffectAfterMount(
    () => {
      // open secret in new tab 👇
      window.open('https://leanpub.com/reintroducing-react', '_blank')
      // perform side effect here 👉 e.g persist user details to database
    },
    [resetDep]
  )

  return (
    <section className='App'>
      <div className='Expandable'>
        <Header toggle={toggle} style={{ border: '1px dotted red' }}>
          {' '}
          They've been lying to you{' '}
        </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded} style={{ background: 'papayawhip' }}>
          <p>
            This is highly sensitive information and can only be viewed ONCE!!!!
          </p>
          <p>
            Click to view the conspiracy <br />
            <button onClick={reset}> View secret </button>
          </p>
        </Body>
      </div>
    </section>
  )
}

export default App
