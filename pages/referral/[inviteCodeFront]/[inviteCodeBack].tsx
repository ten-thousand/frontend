import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import FadeIn from 'react-fade-in';
import { toast } from 'react-toastify';

import { MessageBanner } from '@/components/Common/MessageBanner';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { PhoneAuthForm } from '@/components/Referral/PhoneAuthForm';
import { Analytics } from '@/utils/analytics';
import { Client } from '@/utils/client';

const ReferralPage = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['x-tenthousand-token']);
  const [invitedByUsername, setInvitedByUsername] = useState<string>('');

  useEffect(() => {
    if (!cookies && cookies['x-tenthousand-token']) {
      toast('이미 가입하셨네요! 다시 오신 걸 환영해요! 👍');
      router.push('/dashboard');
    }
  }, []);

  const { inviteCodeFront, inviteCodeBack } = router.query;
  const inviteCode = useMemo<string | undefined>(
    () =>
      !inviteCodeFront ? undefined : `${inviteCodeFront}/${inviteCodeBack}`,
    [inviteCodeFront, inviteCodeBack],
  );
  const [verificationIdentifier, setVerificationIdentifier] = useState<string>(
    '',
  );

  useEffect(() => {
    // Loading router.query
    if (!inviteCode) {
      return;
    }

    // Login route
    if (inviteCode === 'auth/login') {
      Analytics.logEvent('view_login');
      return;
    }

    const getData = async () => {
      try {
        const { data } = await Client.post('/core/link', { inviteCode });
        if (data.ok) {
          Analytics.logEvent('view_referral', {
            inviteCode,
          });
          setInvitedByUsername(data.data.userName);
          return;
        }
        if (data.message === 'NotValidInviteCodeException') {
          toast('올바른 초대 링크가 아닙니다. 죄송해요😭');
          await Analytics.logEvent('view_referral_but_redirect', {
            inviteCode,
          });
          router.push('/');
        }
      } catch (error) {
        console.log(error);
        toast(
          '서버 또는 네트워크 에러가 발생했어요. 잠시 뒤에 다시 사용해 주세요. 🙏',
        );
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
    await Analytics.logEvent(
      'click_phone_auth_submit',
      inviteCode === 'auth/login'
        ? undefined
        : {
            inviteCode,
          },
    );

    console.log({
      verificationIdentifier,
      verificationCode,
    });
    const { data } = await Client.post('/user/confirmation', {
      verificationIdentifier,
      verificationCode,
    });

    if (data.ok) {
      // FIXME: TOKEN HERE
      const token = data.data.token;
      console.log('token', token);
      setCookie('x-tenthousand-token', token, {
        path: '/',
        maxAge: YEAR * 10,
        sameSite: true,
      });
      router.push('/dashboard');
      return;
    }
    if (data.message === 'VerificationFailedException') {
      toast('올바른 인증 코드가 아닙니다. 죄송해요😭');
    } else if (data.message === 'CodeExpiredException') {
      toast('인증 코드 입력 가능 시간이 지났어요. 🥲');
    }
  };

  return (
    <ScreenContainer>
      <FadeIn delay={0} transitionDuration={800} visible={!!invitedByUsername}>
        <MessageBanner>
          📮 <strong>{`@${invitedByUsername}`}</strong> 님이 초대해주셨네요! 🎉
          축하드려요!
        </MessageBanner>
      </FadeIn>
      <InvitationStatus />
      <PhoneAuthForm
        inviteCode={inviteCode}
        setVerificationIdentifier={setVerificationIdentifier}
        onClickJoin={onClickJoin}
      />
    </ScreenContainer>
  );
};

export default ReferralPage;

const YEAR = 365 * 24 * 60 * 60;
