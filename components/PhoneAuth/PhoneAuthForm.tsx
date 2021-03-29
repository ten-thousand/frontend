import styled from 'styled-components';

import { Button } from './Button';
import { Input } from './Input';

export const PhoneAuthForm = () => {
  return (
    <Container>
      <Input label="전화번호" placeholder="전화번호 인증이 필요해요." />
      <Button primary>인증번호 받기</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 420px;
`;
