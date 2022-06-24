import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'

import '../global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <PrismicProvider client={client} >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PrismicProvider>
    </>
  )
}
