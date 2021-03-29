import { AppProps } from 'next/app'

import { GlobalStyle } from '../components/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
