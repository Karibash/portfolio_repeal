import { BaselinePosition } from 'common/cssprops/BaselinePosition';
import { ContentDistribution } from 'common/cssprops/ContentDistribution';
import { ContentPosition } from 'common/cssprops/ContentPosition';
import { Globals } from 'common/cssprops/Globals';
import { OverflowPosition } from 'common/cssprops/OverflowPosition';

export const AlignContent = {
  Normal: 'normal',
  ...Globals,
  ...ContentDistribution,
  ...BaselinePosition,
  ...ContentPosition,
  ...OverflowPosition,
} as const;
export type AlignContent = typeof AlignContent[keyof typeof AlignContent];
