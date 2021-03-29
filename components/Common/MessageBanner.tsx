import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const MessageBanner: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(to right, #eecda3, #ef629f);
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Text = styled.span`
  font-weight: 500;
`;
