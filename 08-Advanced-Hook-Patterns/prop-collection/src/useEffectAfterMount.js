import { useRef, useEffect } from 'react'

export default function useEffectAfterMount (cb, deps) {
  const componentJustMounted = useRef(true)
  useEffect(() => {
    if (!componentJustMounted.current) {
      return cb()
    }
    componentJustMounted.current = false
  }, deps)
}
