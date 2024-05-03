"use client";
import { Input } from "@nextui-org/input";
import { url } from "inspector";
import { useState } from "react";
import { useFormState } from "react-dom";
import createUser from "../actions";
import { Button } from "@nextui-org/react";

const initialMessage = {
  message: "",
};
export default function Register() {
  const [state, formAction] = useState(createUser, initialMessage);
  console.log(state);
  return (
    <div className="flex flex-row  max-h-screen ">
      <div className="flex flex-col w-1/2  justify-center items-center border  bg-[url('../public/registrationImg.jpg')] "></div>
      <div className="flex flex-col w-1/2 border border-primary    ">
        <h1 color="primary" className="font-bold ">
          Creer Compte
        </h1>
        <div className="flex flex-col justify-center h-screen items-center  ">
          <div className="flex flex-col justify-evenly  backdrop-blur-xl bg-white/30 h-1/2 w-1/2  ">
            <form action={formAction}>
              <Input type="text" label="Username" color="primary" />
              <Input type="email" label="Email" color="primary" name="email" />
              <p>{state?.message}</p>
              <Input
                type="password"
                label="Password"
                color="primary"
                name="password"
              />
              <p>{state?.message}</p>
              <Button type="submit" color="primary">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
