import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/Common/Button';
import { MessageBanner } from '@/components/Common/MessageBanner';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { LinkRow } from '@/components/Dashboard/LinkRow';

import { Section } from '@/components/Dashboard/Section';
import { SectionHeader } from '@/components/Dashboard/SectionHeader';
import { InvitationCount } from '@/components/Dashboard/InvitationCount';

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
    const usedInviteLinks = allLinks.filter(v => v.isUsed);
    if (usedInviteLinks.length) {
      setInviteLinks(usedInviteLinks);
      setNextLinkIndex(usedInviteLinks.length);
      return;
    }
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
    <ScreenContainer>
      {/*<MessageBanner>📮 초대장이 8장 남았습니다.</MessageBanner>*/}
      <InvitationStatus />
      <Section>
        <SectionHeader>
          <h2>💌 보유한 초대장</h2>
          <h4>가입자가 많아질수록 줄어들어요.</h4>
        </SectionHeader>
        <InvitationCount count={8} />
      </Section>
      <Section>
        <SectionHeader>
          <h2>🔗 초대 링크</h2>
          <h4>링크당 한 사람만 초대할 수 있어요.</h4>
        </SectionHeader>
        <LinkList>
          {inviteLinks.map(({ id, link, isUsed }, index) => (
            <LinkRow
              key={id}
              label={`${index + 1}  🙌`}
              value={link}
              isUsed={isUsed}
            />
          ))}
        </LinkList>
        {canAddLink && (
          <AddLinkButton primary onClick={onClickAddLink}>
            + 링크 더 보기
          </AddLinkButton>
        )}
      </Section>
    </ScreenContainer>
  );
};

export default DashboardPage;

const LinkList = styled.ul`
  width: 100%;
`;

const AddLinkButton = styled(Button)``;

const EXAMPLE_LINKS: InviteLink[] = [
  {
    id: uuidv4(),
    link: 'https://loooo.app/referral/jHQdaiS/oAsdUUid',
    isUsed: true,
  },
  {
    id: uuidv4(),
    link: 'https://loooo.app/referral/jHQdaiS/oAsdUUidffffffff',
    isUsed: false,
  },
].concat(
  Array(8).fill({
    id: uuidv4(),
    link: 'https://loooo.app/referral/jHQdaiS/oAsdUUid',
  }),
);
