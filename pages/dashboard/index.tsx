import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/Common/Button';
import { MessageBanner } from '@/components/Common/MessageBanner';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { LinkRow } from '@/components/Dashboard/LinkRow';

type InviteLink = {
  id: string;
  link: string;
  isUsed?: boolean;
};

const DashboardPage = () => {
  const allLinks = useMemo<InviteLink[]>(() => EXAMPLE_LINKS, []);
  const [nextLinkIndex, setNextLinkIndex] = useState<number>(0);
  const [inviteLinks, setInviteLinks] = useState<InviteLink[]>([]);

  useEffect(() => {
    setInviteLinks([allLinks[0]]);
    setNextLinkIndex(1);
  }, []);

  const canAddLink = nextLinkIndex > 0 && nextLinkIndex < allLinks.length;

  const onClickAddLink = () => {
    if (canAddLink) {
      setInviteLinks([...inviteLinks, allLinks[nextLinkIndex]]);
      setNextLinkIndex(nextLinkIndex + 1);
    }
  };

  return (
    <Wrapper>
      <Container>
        <MessageBanner>📮 초대장이 8장 남았습니다.</MessageBanner>
        <InvitationStatus />
        <LinkList>
          {inviteLinks.map(({ id, link }, index) => (
            <LinkRow
              key={id}
              label={`🙌 초대 링크 ${index + 1}`}
              value={link}
            />
          ))}
        </LinkList>
        {canAddLink && (
          <AddLinkButton primary onClick={onClickAddLink}>
            링크 추가하기
          </AddLinkButton>
        )}
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
  margin-bottom: 64px;
`;

const LinkList = styled.ul`
  width: 100%;
`;

const AddLinkButton = styled(Button)``;

const EXAMPLE_LINKS: InviteLink[] = [
  {
    id: uuidv4(),
    link: 'https://ten-thousand.example.com/1',
    isUsed: true,
  },
  {
    id: uuidv4(),
    link: 'https://ten-thousand.example.com/2',
    isUsed: true,
  },
].concat(
  Array(8).fill({
    id: uuidv4(),
    link: 'https://ten-thousand.example.com',
  }),
);
