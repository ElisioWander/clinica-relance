import type { AppProps } from "next/app";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../services/prismic";
import { Sidebar } from "../Components/Sidebar";
import { SidebarContextProvider } from "../context/sidebarContext";
import { ModalContextProvider } from "../context/ModalContext";

import "../global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalContextProvider>
        <SidebarContextProvider>
          <PrismicProvider client={client}>
            <Sidebar />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PrismicProvider>
        </SidebarContextProvider>
      </ModalContextProvider>
    </>
  );
}
