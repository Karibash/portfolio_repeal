export const BaselinePosition = {
  Baseline: 'baseline',
  First: 'first baseline',
  Last: 'last baseline',
} as const;
export type BaselinePosition = typeof BaselinePosition[keyof typeof BaselinePosition];
