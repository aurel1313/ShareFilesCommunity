'use client'
import { getUser } from "../actions/actions-register";
import { FormEvent, useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { FaEye } from "react-icons/fa";
import H1 from "../../components/H1/H1";
import { Text } from "../../components/Text/Text";
import { handleLogin } from "../actions/action-login";
import { LoginButton } from "../../components/Login-button/LoginButton";


import { getProviders, signIn, useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
export default function Login(p0: FormData) {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({} as any);
  const { data: session } = useSession()

  let auths ={
       isAuth: false,
       name: null,
       email: null,
       image: null,
        provider: null,
   }
   if (session?.user) {
       auths = {
           isAuth: true,
           name: session.user.name,
           email: session.user.email,
           image: session.user.image,
            provider: session.user.provider,
       }
       
   }

  const logo = (
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="github"
      className="w-6 h-6"
    />
  );
  const logoGoogle = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      alt="google"
      className="w-6 h-6"
    />
  );
  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-col w-1/2 h-screen justify-center items-center border custom-blue bg-background ">
          <H1 titre="Login" className="font-bold   " color="" />
        </div>
        <div className="flex flex-col w-1/2 border border-primary h-screen justify-center items-center ">
          <div>
            <Text text="Connexion" color="primary-500" fontFamily="" />
          </div>
          <form >
            <div className="  h-full  ">
              <Input
                type="email"
                label="Email"
                color="primary"
                name="emailLogin"
                className="mt-10"
                placeholder="Email"
                labelPlacement="outside"
              />
              <Input
                type={visible ? "text" : "password"}
                label="Password"
                color="primary"
                name="passwordLogin"
                className="mt-10"
                placeholder="Password"
                labelPlacement="outside"
                endContent={
                  //afficher l'icone oeil  pour voir le mot de passe
                  <FaEye
                    onClick={() => setVisible(!visible)}
                    className="cursor-pointer"
                  />
                }
              />
            </div>
              {!auths.isAuth ?
           <LoginButton auth ="github" logo ={logo}  />
           :'Connecté en tant que '+auths.name
              }
              
              {!auths.isAuth ?
            <LoginButton auth ="google" logo ={logoGoogle}  />
            :'Connecté en tant que '+auths.name
              }
            

            
             
          </form>
        </div>
      </div>
    </div>
  );
}