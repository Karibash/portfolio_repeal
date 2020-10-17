import { useState, useEffect } from 'react';

export const useFrame = (rate: number, delta: number): number => {
  const frameSecond = 1 / rate;
  const [frame, setFrame] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(elapsed + delta);
    setFrame(Math.floor(elapsed / frameSecond));
    if (1 <= elapsed) setElapsed(0);
  }, [delta]);

  return frame;
};
