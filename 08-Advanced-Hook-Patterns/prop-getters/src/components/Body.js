import React from 'react'
import './Body.css'

const Body = ({ children, className = '', expanded, ...otherProps }) => {
  const combinedClassNames = ['Expandable-panel', className].join('')

  return expanded ? (
    <div className={combinedClassNames} {...otherProps}>
      {children}
    </div>
  ) : null
}

export default Body
