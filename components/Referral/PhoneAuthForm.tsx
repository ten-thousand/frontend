import parsePhoneNumber from 'libphonenumber-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';
import { Input } from '@/components/Common/Input';
import { Client } from '@/utils/client';

type Props = {
  inviteCode: string;
  setVerificationIndentifier: (value: string) => void;
  onClickJoin: ({
    username,
    phoneNumber,
    authCode,
  }: {
    username: string;
    phoneNumber: string;
    authCode: string;
  }) => void;
};

export const PhoneAuthForm: React.FC<Props> = ({
  inviteCode,
  setVerificationIndentifier,
  onClickJoin,
}) => {
  const [username, setUsername] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [isAuthCodeSent, setAuthCodeSent] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>('');

  const canSendAuthCode = !!phoneNumber;
  const canCheckAuthCode = !!authCode;

  const onClickSendAuthCode = async () => {
    if (!canSendAuthCode) {
      toast('전화번호를 입력해주세요!');
      return;
    }
    toast.dismiss();

    let phoneNumberWithLocale = phoneNumber;
    if (!phoneNumber.startsWith('+82')) {
      phoneNumberWithLocale = '+82' + phoneNumber;
      setPhoneNumber('+82' + phoneNumber);
    }

    let parsedPhoneNumber = phoneNumberWithLocale;
    try {
      const parsed = parsePhoneNumber(phoneNumberWithLocale, 'KR');
      parsedPhoneNumber = parsed.number as string;
      setPhoneNumber(parsedPhoneNumber);
    } catch (error) {
      toast('올바른 형식의 전화번호를 입력해주세요!');
      return;
    }

    try {
      const { data } = await Client.post('/user', {
        phoneNumber: parsedPhoneNumber,
        userName: username,
        inviteCode,
      });

      if (data.ok) {
        // Success
        setAuthCodeSent(true);
        toast('🚀 인증번호가 발송되었습니다!');
        console.log(
          'verificationIndentifier',
          data.data.verificationIndentifier,
        );
        setVerificationIndentifier(data.data.verificationIndentifier);
        return;
      }
      if (data.message === 'InviteCodeRequiredException') {
        toast('초대 코드가 필요해요!');
      } else if (data.message === 'UserNameRequiredException') {
        toast('신규 유저라면 사용자 이름을 입력해주셔야 해요!');
      } else if (data.message === 'NotValidInviteCodeException') {
        toast('사용할 수 없는 링크로 오셨어요. 죄송해요😭');
      } else if (data.message === 'UnknownCannotLoginException') {
        toast('알 수 없는 에러가 발생했어요. 조금 뒤에 다시 시도해 주세요! 🙏');
      }
    } catch (error) {
      console.log(error);
      toast('서버 에러가 발생했어요. 잠시 뒤에 다시 사용해 주세요. 🙏');
    }
  };

  return (
    <>
      <Input
        label="👋 뭐라고 불러드릴까요?"
        placeholder="사용할 이름을 입력해 주세요."
        value={username}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
      />
      <Input
        label="📨 문자 인증이 필요해요."
        placeholder="인증받을 핸드폰 번호를 입력해주세요!"
        value={phoneNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
      />
      {isAuthCodeSent && (
        <Input
          label="인증번호"
          type="number"
          placeholder="휴대폰으로 전송된 4자리 인증번호를 입력해 주세요."
          value={authCode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAuthCode(event.target.value)
          }
        />
      )}
      <ButtonWrapper>
        {!isAuthCodeSent ? (
          <Button primary ready={canSendAuthCode} onClick={onClickSendAuthCode}>
            인증번호 받기
          </Button>
        ) : (
          <Button
            primary
            ready={canCheckAuthCode}
            onClick={() => {
              if (!canCheckAuthCode) {
                toast('인증번호를 입력해 주세요!');
                return;
              }
              toast.dismiss();
              onClickJoin({ username, phoneNumber, authCode });
            }}
          >
            렛츠기릿!
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;
