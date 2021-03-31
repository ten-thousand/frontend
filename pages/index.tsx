import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Clubhouse from '@/components/Intro/Clubhouse';
import Splash from '@/components/Intro/Splash';

const LandingPage = () => {
  // TODO: implement landing page
  return (
    <Container>
      <Clubhouse />
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
