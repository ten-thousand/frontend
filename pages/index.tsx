import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const LandingPage = () => {
  // TODO: implement landing page
  return (
    <Container>
      {/* FIXME: remove helper link */}
      <Link href="/dashboard">{'/dashboard'}</Link>
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
