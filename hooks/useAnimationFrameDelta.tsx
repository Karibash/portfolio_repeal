import { useEffect, useRef, useState } from 'react';

import { useIsClient } from 'hooks/useIsClient';

export const useAnimationFrameDelta = (): number => {
  const isClient = useIsClient();
  const frame = useRef(0);
  const last = useRef(0);
  const [delta, setDelta] = useState(0);

  const frameRequest = () => {
    const now = performance.now();
    setDelta((now - last.current) / 1000);
    last.current = now;
    frame.current = requestAnimationFrame(frameRequest);
  };

  useEffect(() => {
    if (!isClient) {
      return () => {};
    }

    last.current = performance.now();
    frame.current = requestAnimationFrame(frameRequest);
    return () => cancelAnimationFrame(frame.current);
  }, [isClient]);

  return delta;
};
