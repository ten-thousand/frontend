import { useEffect } from 'react';

export const isBrowser = typeof window !== 'undefined';

export const useBrowserEffect = (
  callback: () => void,
  dependencies: any[] = [],
) => {
  useEffect(() => {
    if (isBrowser) {
      callback();
    }
  }, [dependencies]);
};
