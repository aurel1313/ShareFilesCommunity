import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
export const LoginButton = ({auth,logo}) => {
    const { data: session } = useSession()
    if (!session) {
      
        //bouton github connexion//

        return (
            <Button
               
               onClick={() => signIn()}
                startContent={logo}
            >
              {auth}
            </Button>
        )
        
        
    }
    
   
 
    
}