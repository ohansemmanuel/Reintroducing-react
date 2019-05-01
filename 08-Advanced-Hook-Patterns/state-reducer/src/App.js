import React from 'react'
import useExpanded, { useEffectAfterMount } from './components/Expandable'
import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'
import './components/Expandable.css'
import { longText as TermsAndConditionText } from './components/utils'

function App () {
  const { expanded, toggle, reset, resetDep } = useExpanded(false)

  useEffectAfterMount(
    () => {
      console.log('reset was invoked!!!!')
    },
    [resetDep]
  )

  return (
    <section className='App'>
      <div className='Expandable'>
        <Header toggle={toggle}> Terms and Conditions </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded}>
          {TermsAndConditionText}
          <button onClick={reset}>reset</button>
        </Body>
      </div>
    </section>
  )
}

export default App
