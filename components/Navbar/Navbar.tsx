"use client";
import {
  Navbar as Navbars,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Avatar, Button, Link, useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { signOut, useSession,signIn } from "next-auth/react";
import { Sign } from "crypto";
import { SignOut } from "../SignOut/SignOut";
import router from "next/router";
import { set } from "zod";
import { useTheme } from "../../app/ThemeProvider/ThemeProvider";
import { useEffect, useState } from "react";



// Exemple d'utilisation

export const Navbar = ({openModal}) => {
  const pathName = usePathname();
  const {data : session} = useSession()
  const {isDark} = useTheme()
  const [isMounted, setIsMounted] = useState(false);
 
 useEffect(() => {
    setIsMounted(true);
  }, []);
  if(!isMounted) return null;

  return (
    <><Navbars className={`fixed  ${isDark ? 'custom-blue-dark bg-primary text-secondary ': 'custom-blue bg-primary'}`} >
      <NavbarBrand>
      <p className={`font-bold  ${isDark ? 'custom-blue-dark text-primary': 'custom-blue text-primary'}`}>
  ShareFilesCommunity
</p>
    </NavbarBrand><NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent><NavbarContent justify="end">
        {pathName && !session && pathName === "/Login" && (
          <NavbarItem className="hidden lg:flex" isActive>
            <Link href="/api/auth/signin">Login</Link>
          </NavbarItem>
        )}
        {pathName && pathName !== "/Login" && (
          <NavbarItem className="hidden lg:flex">
            <Link href="/api/auth/signin">Login</Link>
          </NavbarItem>
        )}

        {session && (
          <NavbarItem>
            <Avatar src={session.user.image} size="small" onClick={openModal} />

          </NavbarItem>
        )}
        <NavbarItem>
          {!session &&
            <Link color="primary" href="/Register" variant="flat">
              Sign Up
            </Link>}
        </NavbarItem>
        <NavbarItem>
          {session && (
            <SignOut />
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbars>
    </>
  );

};
