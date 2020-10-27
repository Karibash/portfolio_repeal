import React from 'react';
import styled from '@emotion/styled';

import { AlignContent, AlignItems, FlexDirection, JustifyContent } from 'types/cssprops';

const Container = styled.div<{
  readonly direction: FlexDirection;
  readonly justifyContent: JustifyContent;
  readonly alignContent: AlignContent;
  readonly alignItems: AlignItems;
}>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
`;

type Props = {
  readonly className?: string;
  readonly direction?: FlexDirection;
  readonly justifyContent?: JustifyContent;
  readonly alignContent?: AlignContent;
  readonly alignItems?: AlignItems;
};
const Flex: React.FC<Props> = ({
  children,
  className = '',
  direction = 'row',
  justifyContent = 'initial',
  alignContent = 'initial',
  alignItems = 'initial',
}) => {
  return (
    <Container
      className={className}
      direction={direction}
      justifyContent={justifyContent}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
};

export default Flex;
