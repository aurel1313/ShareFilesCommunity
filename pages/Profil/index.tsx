import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Profil({onClose,isOpen,session}) {
   
    
  
    return (
        <div>
        <Modal title="Profil" isOpen={isOpen} onClose={onClose} size="lg">
           
            <ModalContent>
              
                  
                <ModalHeader>Profil
                    <Button auto onClick={onClose}>X</Button>
                </ModalHeader>
                <ModalBody>
                <div className="flex flex-col items-center justify-center ">
                    
                    <p className="text-xl mt-4">Welcome {session.user.name}</p>
                    <p className="text-xl mt-4">Email : {session.user.email}</p>
                    <img src={session.user.image} alt="avatar" className="rounded-full w-20 h-20 mt-4"/>
                     
                </div>
            
             
                </ModalBody>
            </ModalContent>
          
            </Modal>
        </div>
    )
}