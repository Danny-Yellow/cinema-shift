import { useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: () => void, deps: unknown[]) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, deps);
};