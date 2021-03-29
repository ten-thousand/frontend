import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '@/components/GlobalStyle';

const SECOND = 1000;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={3 * SECOND} />
    </>
  );
}

export default MyApp;
