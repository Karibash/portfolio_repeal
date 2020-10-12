import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import ParallaxParticles from "components/ParallaxParticles";
import ScreenDoorEffect from "components/ScreenDoorEffect";

const Wrapper = styled.div`
  color: ${props => props.theme.color.foreground[500].string()};
`;

const Main = styled.main`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

const FixedBackground = styled(ParallaxParticles)`
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const FixedScreenDoorEffect = styled(ScreenDoorEffect)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const DefaultLayout: React.FC<{
  readonly title?: string;
}> = ({
  children,
  title = 'Karibash | Portfolio',
}) => {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <FixedBackground />
      <Main>
        {children}
      </Main>
      <FixedScreenDoorEffect />
    </Wrapper>
  );
};

export default DefaultLayout;
