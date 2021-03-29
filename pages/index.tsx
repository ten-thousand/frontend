import React from 'react';
import styled from 'styled-components';

import { InvitationStatus } from '@/components/Home/InvitationStatus';
import { PhoneAuthForm } from '@/components/Home/PhoneAuthForm';

const HomePage = () => {
  return (
    <Container>
      <InvitationStatus />
      <PhoneAuthForm />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
