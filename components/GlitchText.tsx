import React from 'react';
import styled from '@emotion/styled';
import Color from 'color';
import { keyframes } from '@emotion/react';

const beforeKeyFrame = keyframes`
  0% {
    clip-path: inset(calc(75 * 1%) 0 0 0);
  }
  5% {
    clip-path: inset(calc(65 * 1%) 0 0 0);
  }
  10% {
    clip-path: inset(calc(15 * 1%) 0 0 0);
  }
  15% {
    clip-path: inset(calc(40 * 1%) 0 0 0);
  }
  20% {
    clip-path: inset(0 0 0 0);
  }
`;

const afterKeyFrame = (shadowColor: Color) => keyframes`
  0% {
    clip-path: inset(0 0 calc(20 * 1%) 0);
    transform: translate(calc(15 * 1%), 0);
    text-shadow: -2px -2px ${shadowColor.string()};
  }
  5% {
    clip-path: inset(0 0 calc(30 * 1%) 0);
  }
  10% {
    clip-path: inset(0 0 calc(80 * 1%) 0);
    transform: translate(calc(10 * 1%), 0);
  }
  15% {
    clip-path: inset(0 0 calc(55 * 1%) 0);
  }
  20% {
    clip-path: inset(0 0 0 0);
    transform: translate(0, 0);
    text-shadow: 0 0 ${shadowColor.string()};
  }
`;

const GlitchChar = styled.span<{
  readonly char: string;
  readonly charColor: Color;
  readonly shadowColor: Color;
}>`
  color: transparent;
  position: relative;

  &:before, &:after {
    position: absolute;
    content: '${props => props.char}';
    color: ${props => props.charColor.string()};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &:before {
    animation: ${beforeKeyFrame} 1.5s infinite ease-in-out alternate;
  }

  &:after {
    animation: ${props => afterKeyFrame(props.shadowColor)} 1.5s infinite ease-in-out alternate;
  }
`;

type Props = {
  readonly className?: string;
  readonly text: string;
  readonly textColor: Color;
  readonly shadowColor: Color;
};
const GlitchText: React.FC<Props> = ({
  className = '',
  text,
  textColor,
  shadowColor,
}) => {
  return (
    <div className={className}>
      {text.split('').map((char, index) => {
        return <GlitchChar
          key={index}
          char={char}
          charColor={textColor}
          shadowColor={shadowColor}
        >{char}</GlitchChar>
      })}
    </div>
  );
};

export default GlitchText;
