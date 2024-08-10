"use server";
import { z } from "zod";


import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import { get } from "http";
import {createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app} from "../../firebase/FirebaseConfig";

  
//create user function to create a user  in the database
export const createUser = async (params: FormData) => {
  if (!(params instanceof FormData)) {
    throw new Error("Invalid input: params should be an instance of FormData");
  }
  const schema = z.object({
    username: z
      .string()
      .min(0, "ne peut pas etre nul")
      .max(100, "ne peut pas depasser 100 caractères"),
    email: z.string().min(0, "ne peut pas etre nul"),
    password: z
      .string()
      .min(0, "ne peut pas etre nul")
      .max(100, "ne peut pas depasser 100 caractères")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "doit contenir au moins 8 caractères, une lettre et un chiffre"
      ),
  });
  const validation = schema.safeParse({
    username: params.get("username"),
    email: params.get("email"),
    password: params.get("password"),
  } as { username: string; email: string; password: string });

  // Return early if the form data is invalid
  if (!validation.success) {
    return {
      errors: validation.error.issues,
    };
  }

  // Create a new user
  const user = {
    username: validation.data.username,
    email: validation.data.email,
    password: validation.data.password,
  };
  console.log(user);
  // Save the user to the database

  const db = getFirestore(app);

  //add user to the database
  const docRef = await addDoc(collection(db, "users"), user);

  // Return the new user
  return {
    user,
  };
};

export const getUser = async (params: FormData) => {
  //get data form //
  if (!(params instanceof FormData)) {
    throw new Error("Invalid input: params should be an instance of FormData");
  }

  //get value from the form
  const schema = z.object({
    emailLogin: z.string().min(0, "ne peut pas etre nul"),
    passwordLogin: z.string().min(0, "ne peut pas etre nul"),
  });
  const validation = schema.safeParse({
    emailLogin: params.get("emailLogin"),
    passwordLogin: params.get("passwordLogin"),
  } as { emailLogin: string; passwordLogin: string });
  // Return early if the form data is invalid
  if (!validation.success) {
    return {
      errors: validation.error.issues,
    };
  }
    //sign in with email and password

 

  const db = getFirestore(app);
  const utilisateurs = collection(db, "users");

  //retourner vers Login les données de l'utilisateur
  const querySnapshot = await getDocs(utilisateurs);
  let userLogin = {};
  const user = querySnapshot.docs.map((doc) => {
    if (
      doc.data().email === validation.data.emailLogin &&
      doc.data().password === validation.data.passwordLogin
    ) {
       userLogin = {
        email: doc.data().email,
        password: doc.data().password,
      };
    }
  });

return {
    userLogin,
}

 
};
