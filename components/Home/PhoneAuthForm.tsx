import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from '@/components/Common/Button';
import { Input } from '@/components/Common/Input';

export const PhoneAuthForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [isAuthCodeSent, setAuthCodeSent] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>('');

  const canSendAuthCode = !!phoneNumber;
  const canCheckAuthCode = !!authCode;

  return (
    <Container>
      <Input
        label="전화번호"
        type="number"
        placeholder="먼저 전화번호 인증이 필요해요."
        value={phoneNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
      />
      {isAuthCodeSent && (
        <Input
          label="인증번호"
          type="number"
          placeholder="휴대폰으로 전송된 4자리 인증번호를 입력해주세요."
          value={authCode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAuthCode(event.target.value)
          }
        />
      )}
      {!isAuthCodeSent ? (
        <Button
          primary
          ready={canSendAuthCode}
          onClick={() => {
            if (!canSendAuthCode) {
              toast('전화번호를 입력해 주세요!');
              return;
            }
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
          }}
        >
          가입하기
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 420px;
`;
