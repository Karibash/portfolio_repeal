import React, { createContext, useContext, useMemo } from 'react';

import {
  useMediaQuery,
  CombineCondition,
  CombineQuery,
  SizeCondition,
  SizeQuery,
  WideDirection,
} from "hooks/useMediaQuery";

export const BreakPoint = {
  Tiny: 'tiny',
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;
export type BreakPoint = typeof BreakPoint[keyof typeof BreakPoint];

export type Thresholds = {
  readonly [K in BreakPoint]: number;
};

export const Match = {
  ...BreakPoint,
  Huge: 'huge',
} as const;
export type Match = typeof Match[keyof typeof Match];

export type Matches = {
  readonly [K in (BreakPoint | 'huge')]: boolean;
};

const MediaQueryContext: React.Context<Matches> = createContext({
  ...Object.assign({}, ...Object.values(Match).map(key => ({[key]: false}))),
});

type Props = {
  readonly thresholds: Thresholds;
};
export const MediaQueryContextProvider: React.FC<Props> = ({
  children,
  thresholds,
}) => {
  useMediaQuery(new SizeQuery(thresholds.tiny, WideDirection.Width, SizeCondition.Max));
  const tiny = useMediaQuery(new SizeQuery(thresholds.tiny, WideDirection.Width, SizeCondition.Max));
  const small = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(thresholds.tiny + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(thresholds.small, WideDirection.Width, SizeCondition.Max),
  ));
  const medium = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(thresholds.small + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(thresholds.medium, WideDirection.Width, SizeCondition.Max),
  ));
  const large = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(thresholds.medium + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(thresholds.large, WideDirection.Width, SizeCondition.Max),
  ));
  const huge = useMediaQuery(new SizeQuery(thresholds.large + 1, WideDirection.Width, SizeCondition.Min));

  const value = useMemo(() => ({
    tiny,
    small,
    medium,
    large,
    huge,
  }), [
    tiny,
    small,
    medium,
    large,
    huge,
  ]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => {
  return useContext(MediaQueryContext)
}
