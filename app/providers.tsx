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


