import type { AppProps } from "next/app";
import Layout from "../app/layout";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Provider } from 'next-auth/client'
import { SessionProvider } from "next-auth/react"; // Replace 'your-session-provider-module' with the actual module name

export default function App({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {
  const router = useRouter();
 
  return (
    <NextUIProvider >
       <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
