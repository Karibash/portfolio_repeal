import React from 'react';
import styled from '@emotion/styled';

import Columns from 'components/Columns';
import Rows from 'components/Rows';
import { useMediaQueryContext } from 'contexts/useMediaQueryContext';
import { useAdaptiveFontSize } from 'hooks/useAdaptiveFontSize';
import DefaultLayout from 'layouts/DefaultLayout';

const Container = styled(Columns)`
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1<{
  fontSize: number;
}>`
  margin: 0;
  font-size: ${props => props.fontSize}rem;
  font-weight: 300;
`;

const Emphasis = styled.em`
  font-style: normal;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const Name = styled.div`
  display: inline;
  font-weight: 500;
`;

const Supplementary = styled.div`
  margin: 0;
  font-weight: 300;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const SubTitle = styled.h2<{
  fontSize: number;
}>`
  margin: 0 2rem 0 0;
  font-size: ${props => props.fontSize}rem;
  font-weight: 300;
  color: ${props => props.theme.color.primary3[500].string()};
`;

const Role = styled.div<{
  fontSize: number;
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
  const mediaQuery = useMediaQueryContext();
  const fontSize = useAdaptiveFontSize({
    tiny: 1,
    small: 3,
    medium: 4,
  });

  return (
    <DefaultLayout>
      <Container>
        <Title fontSize={fontSize}>
          <div>Hi<Emphasis>,</Emphasis> there</div>
          <div>I<Emphasis>'</Emphasis>m <Name>Karibash</Name></div>
        </Title>
        <Supplementary as={mediaQuery.huge ? Rows : Columns}>
          <SubTitle fontSize={fontSize}>PORTFOLIO</SubTitle>
          <Columns>
            <Rows>
              <Role fontSize={fontSize}>FRONTEND ENGINEER</Role>
              <Separation />
              <Role fontSize={fontSize}>BACKEND ENGINEER</Role>
            </Rows>
            <Rows>
              <Role fontSize={fontSize}>NATIVE APPLICATION ENGINEER </Role>
              <Separation />
              <Role fontSize={fontSize}>DEVELOPER</Role>
            </Rows>
          </Columns>
        </Supplementary>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
