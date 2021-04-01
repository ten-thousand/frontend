import { useCookies } from 'react-cookie';

export const useTokenInsideCookie = () => {
  const [cookies] = useCookies(['x-tenthousand-token']);
  return cookies['x-tenthousand-token'] as string;
};
