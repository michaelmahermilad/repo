import "@/styles/globals.css";
import ThemeProvider from "@/ThemeProvider";
import type { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot> <ThemeProvider><Layout><Component {...pageProps} /></Layout></ThemeProvider></RecoilRoot>;
}
