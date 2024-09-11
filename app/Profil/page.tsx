'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  useDisclosure,
} from "@nextui-org/react";
import { get } from "http";
import { getProviders, getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { GetServerSidePropsContext } from "next/types";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { set } from "zod";

import { ThemeProvider, useTheme } from "../ThemeProvider/ThemeProvider";
import { darkTheme, lightTheme } from "../ThemeProvider/ThemeProvider";
import { useTheme as useNextUITheme } from '@nextui-org/react';
import { color } from "framer-motion";
import { CustomSwitch } from "../../components/Switch/Switch";


export default function Profil({ onClose, isOpen, session }) {
  //get provider of user connected
  const [providerName, setProviderName] = useState(null);
  const [isVisibleSettings, setIsVisibleSettings] = useState(false);
  const { isDark, toggleDarkMode,darkTheme,lightTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
 
 
 

  useEffect(() => {
    async function fetchProviders() {
      const session = await getSession();
      if (session) {
        const providers = await getProviders();
        const providerKey = Object.keys(providers).find(
          (key) => providers[key].id === session.provider
        );

        setProviderName(providers[providerKey].name);
      }
    }
    fetchProviders();
    setIsMounted(true);
  }, []);
  if(!isMounted) return null;

  const getProfilGithub = async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    const { data } = await octokit.request("GET /users/{username}", {
      username: session?.user?.name,
    });
    console.log(data);
  };

 
  const displaySettings = () => {
    setIsVisibleSettings(true);
  };
 
 
  return (
    <div >
      <Modal title="Profil" isOpen={isOpen} onClose={onClose} size="lg" className={`${isDark ? 'custom-blue-dark bg-primary text-secondary ': 'custom-blue bg-primary'}`}>
        <ModalContent>
          <ModalHeader>
            Profil
            <Button auto onClick={onClose}>
              X
            </Button>
            <CiSettings className="w-6 h-6" onClick={displaySettings} />
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center justify-center " >
              <p className="text-xl mt-4">Welcome {session?.user.name}</p>
              <p className="text-xl mt-4">Email : {session?.user.email}</p>
              <img
                src={session?.user.image}
                alt="avatar"
                className="rounded-full w-20 h-20 mt-4"
              />
            </div>

            {providerName && providerName === "github" && (
              <div className="flex flex-col items-center justify-center ">
                <Button auto onClick={getProfilGithub}>
                  Get Profil Github
                </Button>
              </div>
            )}
            {isVisibleSettings && (
              <div className="flex flex-col items-center justify-center ">
                <p>Settings</p>
                {/*<Switch onChange={toggleDarkMode} isSelected={isDark}  classNames={{
                  thumb: `${isDark ? 'bg-white' : 'bg-red-500'}`, // Thumb blanc
                  wrapper: `${isDark ? 'bg-green-200' : 'bg-red-500'}`, // Couleur de la track en fonction du thème
                }}
                
                >Mode Sombre</Switch>*/}
                <CustomSwitch isSelected={isDark} onChange={toggleDarkMode} />
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

//get providers of the user
export async function fetchData() {
 
  const providers = await getProviders();
  console.log(providers);
  return {
    props: { providers },
  };
}
