'use client'
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
type LoginButtonProps = {
  auth: string;
  logo: JSX.Element;
  
};

export const LoginButton = ({ auth, logo }: LoginButtonProps) => {
    
    const {data: session} = useSession()
      
        //bouton github connexion//


      if(session){
        return (
          <Button
            onClick={() => signOut()}
            className="bg-background text-foreground"
          >
            Sign out
          </Button>
        );
      }
        return (
          <Button
            onClick={() => signIn(auth)}
            className="bg-background text-foreground"
          >
            {logo}
            Sign in with {auth}
          </Button>
        );

        
        
   
    
   
 
    
}