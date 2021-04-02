import React from 'react';
import styled from 'styled-components';

import Splash from '@/components/Intro/Splash';

const LandingPage = () => {
  return (
    <Container>
      <Splash />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
