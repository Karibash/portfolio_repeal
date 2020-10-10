import { Match, useMediaQueryContext } from 'contexts/useMediaQueryContext';

export type Thresholds = {
  readonly [K in Match]?: number;
};

// ToDo: I'll Refactor That Later. maybe later...
export const useAdaptiveFontSize = (thresholds: Thresholds): number => {
  const mediaQuery = useMediaQueryContext();
  switch (true) {
    case mediaQuery.tiny:
      return thresholds.tiny ?? thresholds.small ?? thresholds.medium ?? thresholds.large ?? thresholds.huge;
    case mediaQuery.small:
      return thresholds.small ?? thresholds.medium ?? thresholds.large ?? thresholds.huge ?? thresholds.tiny;
    case mediaQuery.medium:
      return thresholds.medium ?? thresholds.large ?? thresholds.huge ?? thresholds.small ?? thresholds.tiny;
    case mediaQuery.large:
      return thresholds.large ?? thresholds.huge ?? thresholds.medium ?? thresholds.small ?? thresholds.tiny;
    case mediaQuery.huge:
      return thresholds.huge ?? thresholds.large ?? thresholds.medium ?? thresholds.small ?? thresholds.tiny;
    default:
      return 0;
  }
};
