"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Session } from "next-auth";


import { useRouter } from "next/navigation";

'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}

/*import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};*/
