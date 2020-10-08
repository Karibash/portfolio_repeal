import React, { createContext, useContext, useMemo } from 'react';

import {
  useMediaQuery,
  CombineCondition,
  CombineQuery,
  SizeCondition,
  SizeQuery,
  WideDirection,
} from "hooks/useMediaQuery";

const MediaQueryContext = createContext({
  tiny: false,
  small: false,
  medium: false,
  large: false,
  huge: false,
});

export type BreakPoints = {
  readonly tiny: number;
  readonly small: number;
  readonly medium: number;
  readonly large: number;
};

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
