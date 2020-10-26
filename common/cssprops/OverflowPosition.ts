export const OverflowPosition = {
  Unsafe: 'unsafe center',
  Safe: 'safe center',
} as const;
export type OverflowPosition = typeof OverflowPosition[keyof typeof OverflowPosition];
