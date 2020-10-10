import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

type Props = {
  readonly className?: string;
};
const Rows: React.FC<Props> = ({
  children,
  className = '',
}) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default Rows;
