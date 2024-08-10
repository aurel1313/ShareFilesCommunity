"use client";
import { Input } from "@nextui-org/input";
import { url } from "inspector";
import { FormEvent, useState } from "react";
import { useFormState } from "react-dom";
import {createUser} from "../actions/actions-register";
import { Button } from "@nextui-org/react";
import { set } from "zod";
import { getAuth } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    
    try {
     
      const response = await createUser(data);
      if (response.errors) {
        setErrors(response.errors);
      }else{
       //afficher les data de l'utilisateur
       setErrors([]);
        setMessage("Utilisateur créé avec succès");
        
      }
    } catch (error) {
      console.error(error);
    }
   
  };
  

  return (
    <div className="flex flex-row  max-h-screen ">
      <div className="flex flex-col w-1/2  justify-center items-center border  bg-[url('../public/registrationImg.jpg')] "></div>
      <div className="flex flex-col w-1/2 border border-primary    ">
        <h1 color="primary" className="font-bold ">
          Creer Compte
        </h1>
        <div className="flex flex-col justify-center h-screen items-center  ">
          <div className="flex flex-col justify-evenly  backdrop-blur-xl bg-white/30 h-1/2 w-1/2  ">
            <form  onSubmit={handleSubmit}>
              <Input type="text" label="Username" color="primary" name="username" />
              <Input type="email" label="Email" color="primary" name="email" />
              {errors && errors.map(
                (error) =>
                  //si l'erreur est de type email alors on affiche le message d'erreur
                  error.path[0] === "email" && (
                    <div className="text-red-500">{error.path[0]} {error.message}</div>
                  )
              )}

              <Input
                type="password"
                label="Password"
                color="primary"
                name="password"
              />
               { errors && errors.map(
                (error) =>
                  //si l'erreur est de type email alors on affiche le message d'erreur
                  error.path[0] === "password" && (
                    <div className="text-red-500">{error.path[0]} {error.message}</div>
                  )
              )}
              <Button type="submit" color="primary">
                Envoyer
              </Button>
            </form>
            <div className="custom-blue bg-background border-r-5">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
