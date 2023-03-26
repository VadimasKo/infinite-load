import { RefCallback, useCallback, useRef, useState } from "react";


const useIntersectionObserver = () => {
  const [visibleCounter, setVisibleCounter] = useState(0);
  const loaderRef = useRef<HTMLDivElement>()
  const observerRef = useRef<IntersectionObserver>(new IntersectionObserver(() => {
    setVisibleCounter(state => state + 1)
  }))

  const setRef: RefCallback<HTMLDivElement> = useCallback(node => {
    if (!observerRef.current) return
    if (loaderRef.current) {
      setVisibleCounter(0)
      observerRef.current?.disconnect()
    }
    
    if (node) {
      observerRef.current.observe(node)
      loaderRef.current = node
    }
  }, [])

  return [visibleCounter === 3, setRef] as const
}

export default useIntersectionObserver;
