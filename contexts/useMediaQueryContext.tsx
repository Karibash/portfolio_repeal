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

export type BreakPoints = {
  readonly [K in BreakPoint]: number;
};

const MediaQueryContext: React.Context<{
  readonly [K in (BreakPoint | 'huge')]: boolean;
}> = createContext({
  ...Object.assign({}, ...Object.values(BreakPoint).map(key => ({[key]: false}))),
  huge: false,
});

type Props = {
  readonly breakPoints: BreakPoints;
};
export const MediaQueryContextProvider: React.FC<Props> = ({
  children,
  breakPoints,
}) => {
  useMediaQuery(new SizeQuery(breakPoints.tiny, WideDirection.Width, SizeCondition.Max));
  const tiny = useMediaQuery(new SizeQuery(breakPoints.tiny, WideDirection.Width, SizeCondition.Max));
  const small = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(breakPoints.tiny + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(breakPoints.small, WideDirection.Width, SizeCondition.Max),
  ));
  const medium = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(breakPoints.small + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(breakPoints.medium, WideDirection.Width, SizeCondition.Max),
  ));
  const large = useMediaQuery(new CombineQuery(CombineCondition.And,
    new SizeQuery(breakPoints.medium + 1, WideDirection.Width, SizeCondition.Min),
    new SizeQuery(breakPoints.large, WideDirection.Width, SizeCondition.Max),
  ));
  const huge = useMediaQuery(new SizeQuery(breakPoints.large + 1, WideDirection.Width, SizeCondition.Min));

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
