export type BaselinePosition =
  'baseline' | 'first baseline' | 'last baseline';

export type ContentDistribution =
  'space-between' | 'space-around' | 'space-evenly' | 'stretch';

export type ContentPosition =
  'center' | 'start' | 'end' | 'flex-start' | 'flex-end';

export type FlexDirection =
  'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Globals =
  'inherit' | 'initial' | 'revert' | 'unset';

export type OverflowPosition =
  'unsafe center' | 'safe center';

export type SelfPosition =
  'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';

export type AlignContent =
  'normal' | Globals | ContentDistribution | BaselinePosition | ContentPosition | OverflowPosition;

export type AlignItems =
  'normal' | 'stretch' | Globals | SelfPosition | BaselinePosition | OverflowPosition;

export type JustifyContent =
  'normal' | 'left' | 'right' | Globals | ContentDistribution | ContentPosition | OverflowPosition;
