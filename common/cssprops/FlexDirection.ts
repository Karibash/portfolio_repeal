export const FlexDirection = {
  Row: 'row',
  RowReverse: 'row-reverse',
  Column: 'column',
  ColumnReverse: 'column-reverse',
} as const;
export type FlexDirection = typeof FlexDirection[keyof typeof FlexDirection];
