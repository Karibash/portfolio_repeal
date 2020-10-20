import React from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const Container = styled.div<{
  readonly visible: boolean;
  readonly delay: number;
  readonly distance: number;
}>`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 1s ease, transform 1s ease;
  transition-delay: ${props => props.delay}ms;
`;

const TopToBottom = styled(Container)`
  transform: translateY(-${props => props.visible ? 0 : props.distance}rem);
`;

const BottomToTop = styled(Container)`
  transform: translateY(${props => props.visible ? 0 : props.distance}rem);
`;

const LeftToRight = styled(Container)`
  transform: translateX(-${props => props.visible ? 0 : props.distance}rem);
`;

const RightToLeft = styled(Container)`
  transform: translateX(${props => props.visible ? 0 : props.distance}rem);
`;

export const Direction = {
  None: Container,
  TopToBottom: TopToBottom,
  BottomToTop: BottomToTop,
  LeftToRight: LeftToRight,
  RightToLeft: RightToLeft,
} as const;
export type Direction = typeof Direction[keyof typeof Direction];

type Props = {
  readonly className?: string;
  readonly direction?: Direction;
  readonly delay?: number;
  readonly distance?: number;
};
const FadeIn: React.FC<Props> = ({
  children,
  className = '',
  direction = Direction.None,
  delay = 0,
  distance = 1,
}) => {
  const [ref, inView] = useInView();
  const Component = direction;
  return (
    <Component className={className} ref={ref} visible={inView} delay={delay} distance={distance}>
      {children}
    </Component>
  );
};

export default FadeIn;
