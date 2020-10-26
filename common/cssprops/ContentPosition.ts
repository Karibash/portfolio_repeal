export const ContentPosition = {
  Center: 'center',
  Start: 'start',
  End: 'end',
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
} as const;
export type ContentPosition = typeof ContentPosition[keyof typeof ContentPosition];
