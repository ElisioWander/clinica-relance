import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'

import '../global.css'
import { Sidebar } from '../Components/Sidebar'
import { SidebarContextProvider } from '../context/sidebarContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <SidebarContextProvider>
      <PrismicProvider client={client} >
          <Sidebar  />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PrismicProvider>
      </SidebarContextProvider>
    </>
  )
}
