import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '@/components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default MyApp;
