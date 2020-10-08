import { useMedia } from 'react-use';

import { useIsClient } from 'hooks/useIsClient';

interface Query {
  readonly string: string;
}

export const CombineCondition = {
  And: 'and',
  Or: ',',
} as const;
export type CombineCondition = typeof CombineCondition[keyof typeof CombineCondition];

export class CombineQuery implements Query {
  private readonly condition: CombineCondition;
  private readonly query1: Query;
  private readonly query2: Query;

  constructor(condition: CombineCondition, query1: Query, query2: Query) {
    this.condition = condition;
    this.query1 = query1;
    this.query2 = query2;
  }

  get string() {
    return `${this.query1.string} ${this.condition} ${this.query2.string}`;
  }
}

export const WideDirection = {
  Width: 'width',
  Height: 'height',
} as const;
export type WideDirection = typeof WideDirection[keyof typeof WideDirection];

export const SizeCondition = {
  Max: 'max',
  Min: 'min',
} as const;
export type SizeCondition = typeof SizeCondition[keyof typeof SizeCondition];

export class SizeQuery implements Query {
  private readonly emSize: number;
  private readonly wideDirection: WideDirection;
  private readonly sizeCondition: SizeCondition;

  constructor(pixelSize: number, wideDirection: WideDirection, sizeCondition: SizeCondition) {
    this.emSize = pixelSize / 16;
    this.wideDirection = wideDirection;
    this.sizeCondition = sizeCondition;
  }

  get string() {
    return `(${this.sizeCondition}-${this.wideDirection}: ${this.emSize}em)`;
  }
}

export const useMediaQuery = (query: Query): boolean => {
  const matches = useMedia(query.string);
  const isClient = useIsClient();
  return isClient ? matches : false;
};
