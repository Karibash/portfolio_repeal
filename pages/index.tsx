import React from 'react';
import { useTheme } from "@emotion/react";
import styled from '@emotion/styled';

import Columns from 'components/Columns';
import FadeIn, {Direction} from 'components/FadeIn';
import GlitchText from 'components/GlitchText';
import Rows from 'components/Rows';
import { useMediaQueryContext } from 'contexts/useMediaQueryContext';
import { useAdaptiveValue } from 'hooks/useAdaptiveValue';
import { useAnimationFrameDelta } from 'hooks/useAnimationFrameDelta';
import { useFlickerText } from 'hooks/useFlickerText';
import { useFrame } from 'hooks/useFrame';
import { useWindowSize } from 'hooks/useWindowSize';
import DefaultLayout from 'layouts/DefaultLayout';

const Container = styled(Columns)<{
  readonly height: number | null;
}>`
  justify-content: flex-end;
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

const Supplementary = styled.div`
  margin: 0;
  font-weight: 300;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const SubTitle = styled.h2<{
  readonly fontSize: number;
}>`
  margin: 0 2rem 0 0;
  font-size: ${props => props.fontSize}rem;
  font-weight: 300;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const Role = styled.div<{
  readonly fontSize: number;
}>`
  margin: .5rem 0;
  font-size: ${props => props.fontSize / 2}rem;
  line-height: 1;
`;

const Separation = styled.div`
  margin: 0 1rem;
  border-left: 1px solid ${props => props.theme.color.primary3[500].string()};
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
    tiny: windowSize.width * 0.004,
    small: 3,
    medium: 4,
  });

  return (
    <DefaultLayout>
      <Container height={windowSize.height}>
        <Title fontSize={fontSize}>
          <FadeIn direction={Direction.LeftToRight} distance={2}>
            {flickerText('Hi')}
            <Emphasis>,</Emphasis>
            {flickerText(' there')}
          </FadeIn>
          <FadeIn direction={Direction.LeftToRight} distance={2}>
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
        <Supplementary as={mediaQuery.huge ? Rows : Columns}>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={100}>
            <SubTitle fontSize={fontSize}>
              {flickerText('PORTFOLIO')}
            </SubTitle>
          </FadeIn>
          <FadeIn direction={Direction.LeftToRight} distance={2} delay={200}>
            <Columns>
              <Rows>
                <Role fontSize={fontSize}>
                  {flickerText('FRONTEND ENGINEER')}
                </Role>
                <Separation />
                <Role fontSize={fontSize}>
                  {flickerText('BACKEND ENGINEER')}
                </Role>
              </Rows>
              <Rows>
                <Role fontSize={fontSize}>
                  {flickerText('NATIVE APPLICATION ENGINEER')}
                </Role>
                <Separation />
                <Role fontSize={fontSize}>
                  {flickerText('DEVELOPER')}
                </Role>
              </Rows>
            </Columns>
          </FadeIn>
        </Supplementary>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
