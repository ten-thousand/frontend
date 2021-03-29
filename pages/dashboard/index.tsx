import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';
import { Input } from '@/components/Common/Input';
import { InvitationStatus } from '@/components/Home/InvitationStatus';

const DashboardPage = () => {
  return (
    <Wrapper>
      <Container>
        <InvitationStatus />
        <LinkList>
          {/* FIXME: change these hard coded links into dynamic links from server */}
          <ul>
            <LinkInput
              label="🙌 초대 링크 1"
              value="https://ten-thousand.example.com"
            />
          </ul>
          <ul>
            <LinkInput
              label="🙌 초대 링크 2"
              value="https://ten-thousand.example.com"
            />
          </ul>
          <ul>
            <LinkInput
              label="🙌 초대 링크 3"
              value="https://ten-thousand.example.com"
            />
          </ul>
        </LinkList>
        <AddLinkButton primary>링크 추가하기</AddLinkButton>
      </Container>
    </Wrapper>
  );
};

export default DashboardPage;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 420px;
  margin: 0 auto;
`;

const LinkList = styled.ul`
  width: 100%;
`;

const LinkInput = styled(Input).attrs({
  style: { border: '1px solid #ced4da' },
})`
  width: 100%;
  margin-top: 4px;
  margin-bottom: 24px;
`;

const AddLinkButton = styled(Button)``;
