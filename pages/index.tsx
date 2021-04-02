import React from 'react';
import styled from 'styled-components';

import Splash from '@/components/Intro/Splash';
import { useBrowserEffect } from '@/hooks/useBrowserEffect';
import { Analytics } from '@/utils/analytics';

const LandingPage = () => {
  useBrowserEffect(() => {
    Analytics.logEvent('view_landing');
  });

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
