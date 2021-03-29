import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';

type Props = {
  label: string;
  value: string;
};

export const LinkRow: React.FC<Props> = ({ label, value }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Container>
        <Input value={value} />
        <CopyButton>복사</CopyButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0 24px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
`;

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 18px;
  margin-right: 8px;
  border-radius: 8px;
  font-size: 1.05rem;
  background-color: #f1f3f5;
  border: 1px solid #dee2e6;
`;

const CopyButton = styled(Button)`
  width: 82px;
  height: 100%;
  padding: 16px 0;
  font-size: 1.05rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
  background-color: #dee2e6;
  color: rgba(0, 0, 0, 0.65);

  &:hover {
    background-color: #ced4da;
  }
`;
