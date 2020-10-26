import { BaselinePosition } from 'common/cssprops/BaselinePosition';
import { Globals } from 'common/cssprops/Globals';
import { OverflowPosition } from 'common/cssprops/OverflowPosition';
import { SelfPosition } from 'common/cssprops/SelfPosition';

export const AlignItems = {
  Normal: 'normal',
  Stretch: 'stretch',
  ...Globals,
  ...SelfPosition,
  ...BaselinePosition,
  ...OverflowPosition,
} as const;
export type AlignItems = typeof AlignItems[keyof typeof AlignItems];
