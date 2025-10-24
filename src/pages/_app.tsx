import "@/styles/globals.css";
import ThemeProvider from "@/ThemeProvider";
import type { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import Layout from "./Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {


    const defaultTitle = " كنيسة العذراء مريم بالمليحة";
  const defaultDescription = "⛪ كنيسة العذراء مريم بالمليحة - الصفحة الرسمية";
  const defaultImage = "https://elmoli7a-saint-mary-official.vercel.app/image.png";
  const siteUrl = "https://elmoli7a-saint-mary-official.vercel.app";
  return   <>    <Head>
        {/* Default title (will be replaced if page sets one) */}
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />

        {/* Open Graph */}
        <meta property="og:type" content={defaultTitle} />
        <meta property="og:site_name" content={defaultTitle} />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:url" content={siteUrl} />

        
      </Head><RecoilRoot> <ThemeProvider><Layout><Component {...pageProps} /></Layout></ThemeProvider></RecoilRoot></>;
}
