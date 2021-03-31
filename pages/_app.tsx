import 'react-toastify/dist/ReactToastify.css';
import '@/styles/clubhouse.css';
import '@/styles/splash.css';

import { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '@/components/GlobalStyle';
import GoogleTagManager from '@/utils/GoogleTagManager';

const SECOND = 1000;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => GoogleTagManager.pageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={3 * SECOND} />
    </>
  );
}

export default MyApp;
