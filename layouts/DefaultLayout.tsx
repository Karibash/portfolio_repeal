import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { useTheme } from "@emotion/react";

import ParallaxParticles from "components/ParallaxParticles";
import ScreenDoorEffect from "components/ScreenDoorEffect";

const DefaultLayout: React.FC<{
  readonly title?: string;
}> = ({
  children,
  title = 'Karibash | Portfolio',
}) => {
  const theme = useTheme();

  const Wrapper = styled.div`
    color: ${theme.color.foreground[500].string()};
    background-color: ${theme.color.background[500].string()};
  `;

  const Main = styled.main`
    min-width: 100vw;
    min-height: 100vh;
  `;

  const FixedBackground = styled(ParallaxParticles)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
  `;

  const FixedScreenDoorEffect = styled(ScreenDoorEffect)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
  `;

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
