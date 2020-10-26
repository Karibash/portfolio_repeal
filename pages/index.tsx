import React from 'react';
import { useTheme } from "@emotion/react";
import styled from '@emotion/styled';

import Columns from 'components/Columns';
import FadeIn, { Direction } from 'components/FadeIn';
import GlitchText from 'components/GlitchText';
import { useMediaQueryContext } from 'contexts/useMediaQueryContext';
import { useAdaptiveValue } from 'hooks/useAdaptiveValue';
import { useAnimationFrameDelta } from 'hooks/useAnimationFrameDelta';
import { useFlickerText } from 'hooks/useFlickerText';
import { useFrame } from 'hooks/useFrame';
import { useWindowSize } from 'hooks/useWindowSize';
import DefaultLayout from 'layouts/DefaultLayout';

const Container = styled(Columns)<{
  readonly alignment: string;
  readonly height: number | null;
}>`
  justify-content: ${props => props.alignment};
  width: 100vw;
  height: ${props => props.height === null ? '100vh' : `${props.height}px`};
  padding: 2rem;
`;

const Title = styled.h1<{
  readonly fontSize: number;
}>`
  margin: 0;
  font-size: ${props => props.fontSize}rem;
  font-weight: 300;
`;

const Emphasis = styled.em`
  font-style: normal;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const Name = styled(GlitchText)`
  display: inline-flex;
  font-weight: 500;
`;

const Supplementary = styled(Columns)`
  margin: 0;
  font-weight: 300;
`;

const Role = styled.div<{
  readonly fontSize: number;
}>`
  margin: .5rem 0;
  font-size: ${props => props.fontSize}rem;
  line-height: 1;
`;

const Separation = styled.hr<{
  readonly width: number;
}>`
  width: ${props => props.width}rem;
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid ${props => props.theme.color.primary3[500].string()};
`;

const IndexPage: React.FC = () => {
  const animationFrameDelta = useAnimationFrameDelta();
  const flickerTextFrame = useFrame(10, animationFrameDelta);
  const flickerText = (text: string): string => {
    return useFlickerText(text, 10, 0.005, [flickerTextFrame]);
  };

  const theme = useTheme();
  const windowSize = useWindowSize();
  const mediaQuery = useMediaQueryContext();
  const fontSize = useAdaptiveValue({
    tiny: windowSize.width * 0.008,
    small: 5,
    medium: 6,
  });

  return (
    <DefaultLayout>
      <Container alignment={mediaQuery.tiny ? 'flex-end' : 'center'} height={windowSize.height}>
        <Title fontSize={fontSize}>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={100}>
            {flickerText('Hi')}
            <Emphasis>,</Emphasis>
            {flickerText(' there')}
          </FadeIn>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={150}>
            {flickerText('I')}
            <Emphasis>'</Emphasis>
            {flickerText('m ')}
            <Name
              text={flickerText('Karibash')}
              textColor={theme.color.foreground[500]}
              shadowColor={theme.color.primary3[500]}
            />
          </FadeIn>
        </Title>
        <FadeIn direction={Direction.LeftToRight} distance={2} delay={200}>
          <Separation width={fontSize*6} />
        </FadeIn>
        <Supplementary>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={250}>
            <Role fontSize={fontSize/4}>
              {flickerText('Frontend Engineer')}
            </Role>
          </FadeIn>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={300}>
            <Role fontSize={fontSize/4}>
              {flickerText('Backend Engineer')}
            </Role>
          </FadeIn>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={350}>
            <Role fontSize={fontSize/4}>
              {flickerText('Native Application Engineer')}
            </Role>
          </FadeIn>
        </Supplementary>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
