import type { AppProps } from "next/app";
import Layout from "../app/layout";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Provider } from 'next-auth/client'
import { SessionProvider } from "next-auth/react"; // Replace 'your-session-provider-module' with the actual module name
import "../styles/globals.css";
import { ThemeProvider } from "../app/ThemeProvider/ThemeProvider";
export default function App({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {
  const router = useRouter();
 
  return (
   <ThemeProvider>
       <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
