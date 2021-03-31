import { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';

import { Client } from '@/utils/client';

const MAX_USER_COUNT = 10000;

export const useUserCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: {
            data: { user: userCount },
          },
        } = await Client.get('/core');
        setCount(userCount > MAX_USER_COUNT ? MAX_USER_COUNT : userCount);
      } catch (error) {
        console.log(error);
        setCount(0);
      }
    };

    getData();
  }, []);

  return count;
};
