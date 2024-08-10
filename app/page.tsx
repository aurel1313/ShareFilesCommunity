
import { Navbar } from "../components/Navbar/Navbar";
import {NextUIProvider} from "@nextui-org/react";

export default function Page(){
    //si user pas connecté alors on redirige vers la page de connexion
   
    return (
        <NextUIProvider>
            <Navbar visibleNav={undefined}/>
           
        </NextUIProvider>
    )
}