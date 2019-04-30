import React from 'react'

import './Header.css'

const Header = ({ children, className = '', toggle, ...otherProps }) => {
  // combine our internal className and any other provided by the user
  const combinedClassName = ['Expandable-trigger', className].join('')

  return (
    <button onClick={toggle} className={combinedClassName} {...otherProps}>
      {children}
    </button>
  )
}

export default Header
