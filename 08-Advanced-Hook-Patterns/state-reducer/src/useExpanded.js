import { useCallback, useMemo, useState, useRef } from 'react'

const callFunctionsInSequence = (...fns) => (...args) => {
  console.log(args)
  return fns.forEach(fn => fn && fn(...args))
}

export default function useExpanded (initialExpanded = false) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )

  const resetRef = useRef(0)
  const reset = useCallback(
    () => {
      setExpanded(initialExpanded)
      ++resetRef.current
    },
    [initialExpanded]
  )
  // const [resetDep, setResetDep] = useState(0)
  // const reset = useCallback(
  //   () => {
  //     setExpanded(initialExpanded)
  //     setResetDep(resetDep => resetDep + 1)
  //   },
  //   [initialExpanded]
  // )

  const getTogglerProps = useCallback(
    ({ onClick, ...props }) => ({
      'aria-expanded': expanded,
      onClick: callFunctionsInSequence(toggle, onClick),
      ...props
    }),
    [toggle, expanded]
  )

  const value = useMemo(
    () => ({
      expanded,
      toggle,
      getTogglerProps,
      reset,
      resetDep: resetRef.current
    }),
    [expanded, toggle, getTogglerProps, reset]
  )

  return value
}
