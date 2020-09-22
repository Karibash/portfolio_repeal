import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import ParallaxParticles from "components/ParallaxParticles";

const Wrapper = styled.div`
  color: ${props => props.theme.color.foreground[500].string()};
  background-color: ${props => props.theme.color.background[500].string()};
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

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
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
    </Wrapper>
  );
};

export default DefaultLayout;
