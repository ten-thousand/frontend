import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import { MessageBanner } from '@/components/Common/MessageBanner';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { PhoneAuthForm } from '@/components/Referral/PhoneAuthForm';
import { API_URL, Client } from '@/utils/client';

const ReferralPage = () => {
  const router = useRouter();
  const { inviteCodeFront, inviteCodeBack } = router.query;
  const inviteCode = useMemo(() => `${inviteCodeFront}/${inviteCodeBack}`, [
    inviteCodeFront,
    inviteCodeBack,
  ]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await Client.post('/core/link', { inviteCode });
    };

    getData();
  }, [inviteCode]);

  const onClickJoin = async ({
    username,
    phoneNumber,
    authCode,
  }: {
    username: string;
    phoneNumber: string;
    authCode: string;
  }) => {
    console.log({ username, phoneNumber, authCode });
  };

  return (
    <ScreenContainer>
      <MessageBanner>
        📮 @jayhxmo님이 초대해주셨네요! 🎉 축하드려요!
      </MessageBanner>
      <InvitationStatus />
      <PhoneAuthForm inviteCode={inviteCode} onClickJoin={onClickJoin} />
    </ScreenContainer>
  );
};

export default ReferralPage;
