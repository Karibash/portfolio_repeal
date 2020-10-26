import { ContentDistribution } from 'common/cssprops/ContentDistribution';
import { ContentPosition } from 'common/cssprops/ContentPosition';
import { Globals } from 'common/cssprops/Globals';
import { OverflowPosition } from 'common/cssprops/OverflowPosition';

export const JustifyContent = {
  Normal: 'normal',
  Left: 'left',
  Right: 'right',
  ...Globals,
  ...ContentDistribution,
  ...ContentPosition,
  ...OverflowPosition,
} as const;
export type JustifyContent = typeof JustifyContent[keyof typeof JustifyContent];
