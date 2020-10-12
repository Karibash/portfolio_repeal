import React from 'react';
import styled from '@emotion/styled';
import Color from "color";

const GlitchChar = styled.span<{
  readonly char: string;
  readonly charColor: Color;
  readonly shadowColor: Color;
}>`
  color: transparent;
  position: relative;
  animation: glitch 1.5s infinite ease-in-out alternate-reverse;
  
  &:after, &:before {
    content: '${props => props.char}';
    position: absolute;
    color: ${props => props.charColor.string()};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    clip-path: var(--clip);
  }
  
  &:after {
    --clip: inset(0 0 calc(var(--split) * 1%) 0);
    transform: translate(calc(var(--shift) * 1%), 0);
    text-shadow: calc(var(--shadow) * 1px) calc(var(--shadow) * 1px) ${props => props.shadowColor.string()};
  }
  
  &:before {
    --clip: inset(calc((95 - var(--split)) * 1%) 0 0 0);
  }
  
  @keyframes glitch {
    0% {
      --split: 20;
      --shift: 15;
      --shadow: -2;
    }
    5% {
      --split: 30;
    }
    10% {
      --split: 80;
      --shift: 10;
    }
    15% {
      --split: 55;
    }
    20% {
      --split: 0;
      --shift: 0;
      --shadow: 0;
    }
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
