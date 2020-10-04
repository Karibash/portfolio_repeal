import { useMedia } from 'react-use';

import { useIsClient } from 'hooks/useIsClient';

export const BreakPoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
export type BreakPoint = typeof BreakPoint[keyof typeof BreakPoint];

export const WidthCriteria = {
  max: 'max-width',
  min: 'min-width',
} as const;
export type WidthCriteria = typeof WidthCriteria[keyof typeof WidthCriteria];

export const useMediaQuery = (breakpoint: BreakPoint, criteria: WidthCriteria): boolean => {
  const emSize = breakpoint / 16;
  const result = useMedia(`(${criteria}: ${emSize}em)`);

  const isClient = useIsClient();
  return isClient ? result : false;
};
