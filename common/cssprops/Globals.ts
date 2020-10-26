export const Globals = {
  Inherit: 'inherit',
  Initial: 'initial',
  Revert: 'revert',
  Unset: 'unset',
} as const;
export type Globals = typeof Globals[keyof typeof Globals];
