import React from 'react';
import styled from '@emotion/styled';

const Effect = styled.div`
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
`;

type Props = {
  readonly className?: string;
};
const ScreenDoorEffect: React.FC<Props> = ({
  className = '',
}) => {
  return (
    <Effect className={className} />
  );
};

export default ScreenDoorEffect;
