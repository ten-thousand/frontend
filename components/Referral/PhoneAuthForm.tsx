import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';
import { Input } from '@/components/Common/Input';

type Props = {
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

export const PhoneAuthForm: React.FC<Props> = ({ onClickJoin }) => {
  const [username, setUsername] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [isAuthCodeSent, setAuthCodeSent] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>('');

  const canSendAuthCode = !!phoneNumber;
  const canCheckAuthCode = !!authCode;
  const canJoin = canCheckAuthCode && !!username;

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
        type="number"
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
          <Button
            primary
            ready={canSendAuthCode}
            onClick={() => {
              if (!canSendAuthCode) {
                toast('전화번호를 입력해 주세요!');
                return;
              }
              toast.dismiss();
              setAuthCodeSent(true);
            }}
          >
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
              if (!canJoin) {
                toast('사용자 이름을 입력해 주세요!');
                return;
              }
              toast.dismiss();
              onClickJoin({ username, phoneNumber, authCode });
            }}
          >
            가입하기
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
