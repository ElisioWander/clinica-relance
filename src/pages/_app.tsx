import type { AppProps } from 'next/app'
import { Header } from '../Components/Header'

import '../global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
