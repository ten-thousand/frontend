import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

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
  const [cookies] = useCookies(['x-tenthousand-token']);

  const [userInformation, setUserInformation] = useState<
    UserInformation | undefined
  >();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const token = cookies['x-tenthousand-token'];
        const headers = token ? { 'x-tenthousand-token': token } : {};
        console.log('headers', headers);
        const {
          data: { ok, data },
        } = await Client.get('/user', { headers });
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
