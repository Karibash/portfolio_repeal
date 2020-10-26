export const SelfPosition = {
  Center: 'center',
  Start: 'start',
  End: 'end',
  SelfStart: 'self-start',
  SelfEnd: 'self-end',
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
} as const;
export type SelfPosition = typeof SelfPosition[keyof typeof SelfPosition];
