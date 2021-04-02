import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationCount } from '@/components/Dashboard/InvitationCount';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { LinkRow } from '@/components/Dashboard/LinkRow';
import { Section } from '@/components/Dashboard/Section';
import { SectionHeader } from '@/components/Dashboard/SectionHeader';
import { useBrowserEffect } from '@/hooks/useBrowserEffect';
import { UserReferral as InviteLink, useUserInformation } from '@/hooks/useUserInformation';
import { Analytics } from '@/utils/analytics';

const DashboardPage = () => {
  const router = useRouter();
  const [nextLinkIndex, setNextLinkIndex] = useState<number>(0);
  const [inviteLinks, setInviteLinks] = useState<InviteLink[]>([]);

  const [userInformation, error] = useUserInformation();
  const allLinks = useMemo(() => {
    if (!userInformation) {
      return [];
    }
    return userInformation.userReferrals;
  }, [userInformation]);
  const invitationCount = useMemo(
    () =>
      userInformation?.userReferrals.filter(({ status }) => status !== 'USED')
        .length || 0,
    [userInformation],
  );

  useBrowserEffect(() => {
    if (!userInformation) {
      return;
    }

    Analytics.logEvent('view_dashboard', {
      userSerial: userInformation.userSerial,
    });
  }, [userInformation]);

  useEffect(() => {
    if (!error) {
      return;
    }

    if (error === 'RequestOrServerError') {
      toast(
        '서버 또는 네트워크 에러가 발생했어요. 잠시 뒤에 다시 사용해 주세요. 🙏',
      );
    } else {
      toast('로그인 후에 확인할 수 있어요. 😇');
      Analytics.logEvent('view_dashboard_but_redirect').then(() => {
        router.push('/referral/auth/login');
      });
    }
  }, [error]);

  useEffect(() => {
    if (!allLinks.length) {
      return;
    }
    const usedInviteLinks = allLinks.filter((v) => v.status === 'USED');
    if (usedInviteLinks.length) {
      setInviteLinks(usedInviteLinks);
      setNextLinkIndex(usedInviteLinks.length);
      return;
    }
    setInviteLinks([allLinks[0]]);
    setNextLinkIndex(1);
  }, [allLinks]);

  const canAddLink = nextLinkIndex > 0 && nextLinkIndex < allLinks.length;

  const onClickAddLink = () => {
    if (canAddLink) {
      setInviteLinks([...inviteLinks, allLinks[nextLinkIndex]]);
      setNextLinkIndex(nextLinkIndex + 1);
    }
  };

  return (
    <ScreenContainer>
      <InvitationStatus />
      <Section>
        <SectionHeader>
          <h2>💌 보유한 초대장</h2>
          <h4>가입자가 많아질수록 사라져요.</h4>
        </SectionHeader>
        <InvitationCount count={invitationCount} />
      </Section>
      <Section>
        <SectionHeader>
          <h2>🔗 초대 링크</h2>
          <h4>링크당 한 사람만 초대할 수 있어요.</h4>
        </SectionHeader>
        <LinkList>
          {inviteLinks.map(({ inviteCode, status, usedBy }, index) => (
            <LinkRow
              key={inviteCode}
              label={`${index + 1}  🙌`}
              value={`https://loooo.app/referral/${inviteCode}`}
              isUsed={status === 'USED'}
              usedByUsername={usedBy?.userName || '알 수 없음'}
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
