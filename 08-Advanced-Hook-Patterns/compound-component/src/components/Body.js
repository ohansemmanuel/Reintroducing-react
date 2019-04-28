import React, { useContext, useMemo } from 'react'
import { ExpandableContext } from './Expandable'
import './Body.css'

const Body = ({ children, className = '', ...otherProps }) => {
  const { expanded } = useContext(ExpandableContext)
  const combinedClassNames = useMemo(
    () => ['Expandable-panel', className].join(''),
    [className]
  )

  return expanded ? (
    <div className={combinedClassNames} {...otherProps}>
      {children}
    </div>
  ) : null
}

export default Body
