import React, { useContext, useMemo } from 'react'
import { ExpandableContext } from './Expandable'
import './Icon.css'

const Icon = ({ className = '', ...otherProps }) => {
  const { expanded } = useContext(ExpandableContext)

  const combinedClassNames = useMemo(
    () => ['Expandable-icon', className].join(''),
    [className]
  )

  return (
    <span className={combinedClassNames} {...otherProps}>
      {expanded ? '-' : '+'}
    </span>
  )
}

export default Icon
