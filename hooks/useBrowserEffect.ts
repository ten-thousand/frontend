import { useEffect } from 'react';

export const isBrowser = typeof window !== 'undefined';

export const useBrowserEffect = (callback: () => void) => {
  useEffect(() => {
    if (isBrowser) {
      callback();
    }
  }, []);
};
