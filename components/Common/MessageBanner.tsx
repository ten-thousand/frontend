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
  padding: 12px 16px;
  margin-top: 48px;

  background: linear-gradient(
    90.19deg,
    #cd64de 0.14%,
    #a455c9 51.54%,
    #7a55c9 99.84%
  );
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media (max-width: 480px) {
    margin-top: 32px;
  }
`;

const Text = styled.span`
  font-weight: 400;
  color: #ffffff;
  line-height: 1.75;
`;
