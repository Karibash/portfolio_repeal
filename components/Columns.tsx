import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  readonly className?: string;
};
const Columns: React.FC<Props> = ({
  children,
  className = '',
}) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default Columns;
