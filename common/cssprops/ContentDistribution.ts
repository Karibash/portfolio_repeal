export const ContentDistribution = {
  SpaceBetween: 'space-between',
  SpaceAround: 'space-around',
  SpaceEvenly: 'space-evenly',
  Stretch: 'stretch',
} as const;
export type ContentDistribution = typeof ContentDistribution[keyof typeof ContentDistribution];
