import { MessageBanner } from '@/components/Common/MessageBanner';
import { ScreenContainer } from '@/components/Common/ScreenContainer';
import { InvitationStatus } from '@/components/Dashboard/InvitationStatus';
import { PhoneAuthForm } from '@/components/Referral/PhoneAuthForm';

const ReferralPage = () => {
  const onClickJoin = ({
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
      <MessageBanner>📮 @jayhxmo에게 초대되었습니다.</MessageBanner>
      <InvitationStatus />
      <PhoneAuthForm onClickJoin={onClickJoin} />
    </ScreenContainer>
  );
};

export default ReferralPage;
