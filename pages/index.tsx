import styled from 'styled-components';

import { PhoneAuthForm } from '@/components/PhoneAuth/PhoneAuthForm';

const Home = () => {
  return (
    <Container>
      <PhoneAuthForm />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;
