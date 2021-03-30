import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: url(/background-dark.jpg) no-repeat center center;
  background-size: cover;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px 64px;

  & > div {
    width: 100%;
  }
`;

export const ScreenContainer: React.FC<Props> = ({ children }) => {
  return (
    <Screen>
      <Container>{children}</Container>
    </Screen>
  );
};
