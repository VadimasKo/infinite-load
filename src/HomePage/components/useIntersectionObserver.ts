import { RefCallback, useCallback, useRef } from "react";


const useIntersectionObserver = (onObserve: () => Promise<void>) => {
  const observerRef = useRef<IntersectionObserver>(new IntersectionObserver(() => onObserve(), { threshold: 1 }))
  const loaderRef = useRef<HTMLDivElement>()
  
  const setRef: RefCallback<HTMLDivElement> = useCallback(node => {
    if (loaderRef.current) {
      observerRef.current?.disconnect()
    }
    
    if (node) {
      console.log('udpdate observer target')
      observerRef.current.observe(node)
      loaderRef.current = node
    }
  }, [])

  return setRef
}

export default useIntersectionObserver;
