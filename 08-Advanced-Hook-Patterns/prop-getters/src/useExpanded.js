import { useCallback, useMemo, useState } from 'react'

export default function useExpanded () {
  const [expanded, setExpanded] = useState(false)
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )
  const togglerProps = useMemo(
    () => ({
      onClick: toggle,
      'aria-expanded': expanded
    }),
    [toggle, expanded]
  )

  const value = useMemo(() => ({ expanded, toggle, togglerProps }), [
    expanded,
    toggle,
    togglerProps
  ])

  return value
}
