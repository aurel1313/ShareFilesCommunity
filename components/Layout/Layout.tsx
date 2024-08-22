import { NextUIProvider } from "@nextui-org/react";
import {Navbar} from "../Navbar/Navbar";


export default function Layout({ children,modalOpen }) {
    
    return (
        <>
            <NextUIProvider>
                <Navbar visibleNav={undefined} openModal={modalOpen} />
              
                {children}
            </NextUIProvider>
        </>
    );
}