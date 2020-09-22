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
