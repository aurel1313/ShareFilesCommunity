import {  NextUIProvider } from "@nextui-org/react";
import { Navbar } from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Profil from "./Profil";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Octokit } from "octokit";
 

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
    //history.pushState(null, '', '/Profil');
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    history.pushState(null, '', '/');
  };
  const getProfilGithub = async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    const { data } = await octokit.request('GET /users/{username}', {
      username: session?.user?.name,
    });
    console.log(data);
  }
  //getProfilGithub();
  
    return (
      <>
        <Layout modalOpen={openProfileModal} >
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold">Home</h1>
                <p className="text-xl mt-4">Welcome to ShareFilesCommunity</p>
            </div>
            {isProfileModalOpen &&<Profil onClose={closeProfileModal} isOpen={isProfileModalOpen} session={session} /> }
           </Layout>

      </>
    );
}