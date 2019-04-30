import React from 'react'
import './Icon.css'

const Icon = ({ className = '', expanded, ...otherProps }) => {
  const combinedClassNames = ['Expandable-icon', className].join('')

  return (
    <span className={combinedClassNames} {...otherProps}>
      {expanded ? '-' : '+'}
    </span>
  )
}

export default Icon
