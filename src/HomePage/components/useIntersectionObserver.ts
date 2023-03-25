import { RefObject, useEffect, useRef } from "react";


const useIntersectionObserver = (ref: RefObject<HTMLDivElement>, onObserve: () => void) => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(onObserve);
  }, []);

  useEffect(() => {
    if (observerRef.current && ref.current) {
      observerRef.current.observe(ref.current);

      return () => {
        observerRef.current!.disconnect();
      };
    }
  }, [ref.current]); 
}

export default useIntersectionObserver;
