"use client";
import { NextUIProvider } from "@nextui-org/react";


import { useRouter, usePathname } from "next/navigation";
import Profil from "./Profil/page";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Octokit } from "octokit";

export default function Index() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    if (pathName === "/Profil") {
      setIsProfileModalOpen(true);
    }
  }, [pathName]);

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
    //history.pushState(null, '', '/Profil');
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    history.pushState(null, "", "/");
  };
  const getProfilGithub = async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    const { data } = await octokit.request("GET /users/{username}", {
      username: session?.user?.name,
    });
    console.log(data);
  };
  //getProfilGithub();

  return (
    <>
      <NextUIProvider>
    
      
      </NextUIProvider>
    </>
  );
}
