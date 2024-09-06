import { Input } from "@nextui-org/react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { FaEye } from "react-icons/fa";
import H1 from "../../components/H1/H1";
import { LoginButton } from "../../components/Login-button/LoginButton";
import { Text } from "../../components/Text/Text";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function signin({
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [visible, setVisible] = useState(false);
    interface ProviderData {
      logo: JSX.Element;
      provider: LiteralUnion<BuiltInProviderType, string>;
    }
    
    const [providerData, setProviderData] = useState<ProviderData[]>([]);
    const { data: session } = useSession()

  let auths ={
       isAuth: false,
       name: null,
       email: null,
       image: null,
       
   }
   if (session?.user) {
       auths = {
           isAuth: true,
           name: session.user.name,
           email: session.user.email,
           image: session.user.image,
          
       }
       
   }
  

//parcourir les providers et associer leurs logos
useEffect(() => {
    
    Object.values(providers).map((provider) => {
        // ajouter img dynamique pour chaque provider
        let logo = <></>;
        if (provider.id === "github") {
            logo = (
                <FaGithub />
            );
        } else if (provider.id === "google") {
            logo = (
                <FcGoogle />
            );
        }
        else if (provider.id === "discord") {
            logo = (
                <FaDiscord />
            );
        }
        setProviderData((prev) => [...prev, { logo, provider: provider.id }]);

    }
       
    );


}, [providers]);

  return (
    <div>
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
                <div className="flex flex-col">
            
            {providerData.map((provider) => (
                <div key={provider.provider}>
                <LoginButton auth={provider.provider} logo={provider.logo} />
                </div>
            ))}
            
            </div> 
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
   
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { redirect: { destination: "/" } }
    }
  
    const providers = await getProviders()
  
    return {
      props: { providers: providers ?? [] },
    }
  }

export default signin;