import { useCallback, useMemo, useRef, useReducer } from 'react'

const callFunctionsInSequence = (...fns) => (...args) => {
  console.log(args)
  return fns.forEach(fn => fn && fn(...args))
}

const internalReducer = (state, action) => {
  switch (action.type) {
    case useExpanded.types.toggleExpand:
      return {
        ...state,
        expanded: !state.expanded
      }
    case useExpanded.types.reset:
      return {
        ...state,
        expanded: action.payload
      }
    default:
      throw new Error(`Action type ${action.type} not handled`)
  }
}

export default function useExpanded (initialExpanded = false) {
  const initialState = { expanded: initialExpanded }
  const [{ expanded }, setExpanded] = useReducer(internalReducer, initialState)

  const toggle = useCallback(
    () => setExpanded({ type: useExpanded.types.toggleExpand }),
    []
  )

  const resetRef = useRef(0)
  const reset = useCallback(
    () => {
      setExpanded({ type: useExpanded.types.reset, payload: initialExpanded })
      ++resetRef.current
    },
    [initialExpanded]
  )

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

useExpanded.types = {
  toggleExpand: 'EXPAND',
  reset: 'RESET'
}
