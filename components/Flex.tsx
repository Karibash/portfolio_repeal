import React from 'react';
import styled from '@emotion/styled';

import { AlignContent } from 'common/cssprops/AlignContent';
import { AlignItems } from 'common/cssprops/AlignItems';
import { FlexDirection } from 'common/cssprops/FlexDirection';
import { JustifyContent } from 'common/cssprops/JustifyContent';

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
  direction = FlexDirection.Row,
  justifyContent = JustifyContent.Initial,
  alignContent = AlignContent.Initial,
  alignItems = AlignItems.Initial,
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
