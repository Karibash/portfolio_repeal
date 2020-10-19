import { useState, useEffect } from 'react';

import { useIsClient } from 'hooks/useIsClient';

export const useWindowSize = () => {
  const isClient = useIsClient();
  const [windowSize, setWindowSize] = useState<{
    readonly width: number | null;
    readonly height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (!isClient) {
      return () => {};
    }
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);
  return windowSize;
}
