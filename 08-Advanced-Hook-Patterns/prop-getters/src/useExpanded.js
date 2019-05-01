import { useCallback, useMemo, useState } from 'react'

const callFunctionsInSequence = (...fns) => (...args) => {
  console.log(args)
  return fns.forEach(fn => fn && fn(...args))
}

export default function useExpanded () {
  const [expanded, setExpanded] = useState(false)
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )
  const getTogglerProps = useCallback(
    ({ onClick, ...props }) => ({
      'aria-expanded': expanded,
      onClick: callFunctionsInSequence(toggle, onClick),
      ...props
    }),
    [toggle, expanded]
  )

  const value = useMemo(() => ({ expanded, toggle, getTogglerProps }), [
    expanded,
    toggle,
    getTogglerProps
  ])

  return value
}
