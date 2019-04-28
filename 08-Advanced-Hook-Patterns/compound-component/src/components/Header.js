import React, { useContext, useMemo } from 'react'
import { ExpandableContext } from './Expandable'

import './Header.css'

const Header = ({ children, className = '', ...otherProps }) => {
  const { toggle } = useContext(ExpandableContext)

  // combine our internal className and any other provided by the user
  const combinedClassName = useMemo(
    () => ['Expandable-trigger', className].join(''),
    [className]
  )
  return (
    <button onClick={toggle} className={combinedClassName} {...otherProps}>
      {children}
    </button>
  )
}

export default Header
