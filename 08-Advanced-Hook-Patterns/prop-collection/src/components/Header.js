import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'

import './Header.css'

const Header = ({ children, className = '', ...otherProps }) => {
  const { toggle } = useContext(ExpandableContext)

  // combine our internal className and any other provided by the user
  const combinedClassName = ['Expandable-trigger', className].join('')

  return (
    <button onClick={toggle} className={combinedClassName} {...otherProps}>
      {children}
    </button>
  )
}

export default Header
