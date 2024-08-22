import {  NextUIProvider } from "@nextui-org/react";
import { Navbar } from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Profil from "./Profil";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

 

 export default function Index() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const router = useRouter();
  const {data : session} = useSession()
  useEffect(() => {
    if (router.pathname === '/Profil') {
      setIsProfileModalOpen(true);
    }
  }, [router.pathname]);

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
    history.pushState(null, '', '/Profil');
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    history.pushState(null, '', '/');
  };
  const getProfilGithub = async () => {
    const res = await fetch(`https://api.github.com/${session?.user?.name}`, {
      headers: {
        Authorization: `token ${session.accessToken}`,
      },
    });
    const data = await res.json();
    console.log(data);
  }
  getProfilGithub();
    return (
      <>
        <Layout modalOpen={openProfileModal} >
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold">Home</h1>
                <p className="text-xl mt-4">Welcome to ShareFilesCommunity</p>
            </div>
            {isProfileModalOpen && <Profil onClose={closeProfileModal} isOpen={isProfileModalOpen} session={session} />}
           </Layout>

      </>
    );
}