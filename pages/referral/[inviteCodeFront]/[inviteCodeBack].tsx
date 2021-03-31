import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { MessageBanner } from '@/components/Common/MessageBanner';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { PhoneAuthForm } from '@/components/Referral/PhoneAuthForm';
import { API_URL, Client } from '@/utils/client';

const ReferralPage = () => {
  const router = useRouter();
  const { inviteCodeFront, inviteCodeBack } = router.query;
  const inviteCode = useMemo<string | undefined>(
    () =>
      !inviteCodeFront ? undefined : `${inviteCodeFront}/${inviteCodeBack}`,
    [inviteCodeFront, inviteCodeBack],
  );
  const [
    verificationIndentifier,
    setVerificationIndentifier,
  ] = useState<string>('');

  useEffect(() => {
    if (!inviteCode) {
      return;
    }

    const getData = async () => {
      const { data } = await Client.post('/core/link', { inviteCode });
      if (data.ok) {
        return;
      }
      if (data.message === 'NotValidInviteCodeException') {
        toast('올바른 초대 링크가 아닙니다. 죄송해요😭');
      }
    };

    getData();
  }, [inviteCode]);

  const onClickJoin = async ({
    authCode: verificationCode,
  }: {
    username: string;
    phoneNumber: string;
    authCode: string;
  }) => {
    const { data } = await Client.post('/user/confirmation', {
      verificationIndentifier,
      verificationCode,
    });

    if (data.ok) {
      console.log(data.data.token);
    }
  };

  return (
    <ScreenContainer>
      <MessageBanner>📮 초대장을 받았네요! 🎉 축하드려요!</MessageBanner>
      <InvitationStatus />
      <PhoneAuthForm
        inviteCode={inviteCode}
        setVerificationIndentifier={setVerificationIndentifier}
        onClickJoin={onClickJoin}
      />
    </ScreenContainer>
  );
};

export default ReferralPage;
