"use client";
import {
  Navbar as Navbars,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

// Exemple d'utilisation

export const Navbar = ({visibleNav}) => {
  const pathName = usePathname();

  return (
    <Navbars className="fixed">
      <NavbarBrand>
        <p className="font-bold text-inherit">ShareFilesCommunity</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      </NavbarContent>
      <NavbarContent justify="end">
        {pathName && pathName === "/Login" && (
          <NavbarItem className="hidden lg:flex" isActive>
            <Link href="/Login">Login</Link>
          </NavbarItem>
        )}
        {pathName && pathName !== "/Login" && (
          <NavbarItem className="hidden lg:flex">
            <Link href="/Login">Login</Link>
          </NavbarItem>
        )}

        <NavbarItem>
          <Link color="primary" href="/Register" variant="flat">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbars>
  );
};
