import { useEffect, useState } from 'react';

import { Client } from '@/utils/client';

export type UserReferral = {
  inviteCode: string;
  status: 'USED' | 'ISSUED';
  usedBy: { phoneNumber: string; userName: string };
};

type UserInformation = {
  userSerial: number;
  userPhoneNumber: string;
  userReferrals: UserReferral[];
};

export const useUserInformation: () => [
  UserInformation | undefined,
  string | undefined,
] = () => {
  const [userInformation, setUserInformation] = useState<
    UserInformation | undefined
  >();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { ok, data },
        } = await Client.get('/user');
        if (ok) {
          const { userSerial, userPhoneNumber, userReferrals } = data;
          setUserInformation({ userSerial, userPhoneNumber, userReferrals });
          return;
        }
        setError('FailError');
      } catch (error) {
        console.log(error);
        setError('RequestOrServerError');
      }
    };

    getData();
  }, []);

  return [userInformation, error];
};
