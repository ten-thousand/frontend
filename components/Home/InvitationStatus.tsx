import React from 'react';
import styled from 'styled-components';

export const InvitationStatus: React.FC = () => {
  return (
    <Container>
      <NumberOfPeopleJoined>7912</NumberOfPeopleJoined>
      <TotalNumberOfInvitations>Until 10000</TotalNumberOfInvitations>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const NumberOfPeopleJoined = styled.span`
  font-weight: bold;
  font-size: 4.2rem;
`;

const TotalNumberOfInvitations = styled.span`
  font-weight: 300;
  font-size: 2.5rem;
`;
