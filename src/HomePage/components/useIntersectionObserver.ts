import { RefObject, useEffect } from "react";

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const useIntersectionObserver = (ref: RefObject<HTMLDivElement>, onObserve: () => void) => {
  useEffect(() => {
    console.log('newRef', ref.current)
    const observer = new IntersectionObserver(onObserve, options)
    if (ref.current) observer.observe(ref.current) 

    // cleanup
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    }
  }, [ref.current])
}

export default useIntersectionObserver;
