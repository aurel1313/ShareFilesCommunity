'use client';
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
import MyLink from "../Link/Link";
import CustomLink from "../Link/Link";
import Profil from "../../app/Profil/page";



// Exemple d'utilisation

export default function Navbar ({}) {
  const pathName = usePathname();
  const {data : session} = useSession()
  const {isDark} = useTheme()
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
 const router = useRouter();
 //open modal profil when click on avatar
 useEffect(() => {
  if (pathName === "/Profil") {
    setIsProfileModalOpen(true);
  }
}, [pathName]);
  const openModal = () => {
  
    setIsProfileModalOpen(true);
    history.pushState(null, '', '/Profil');
  

  };
  const closeModal = () => {
    setIsProfileModalOpen(false);
    history.pushState(null, '', '/');
  };




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
           <CustomLink href="/api/auth/signin" className={`${isDark ? "text-blue-400": "text-white"}`}  >
              Login
            </CustomLink>
          </NavbarItem>
        )}
        {pathName && pathName !== "/Login" && (
          <NavbarItem className="hidden lg:flex">
           
            <CustomLink href="/api/auth/signin" className={`${isDark ? "text-blue-400": "text-white"}`}  >
              Login
            </CustomLink>
          </NavbarItem>
        )}

        {session && (
          <NavbarItem>
            <Avatar src={session.user.image} size="small" onClick={openModal} />
            {
              isProfileModalOpen && <Profil isOpen={isProfileModalOpen} onClose={closeModal} session={session} />
            }
          </NavbarItem>
        )}
        <NavbarItem>
          {!session &&
            <CustomLink href="/Register" className={`${isDark ? "text-blue-400": "text-white"}`}  >Sign Up</CustomLink>
            }
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
