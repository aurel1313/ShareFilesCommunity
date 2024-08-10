"use server";

import { NextRequest, NextResponse } from "next/server";
import { FormEvent } from "react";
import { getUser } from "./actions-register";
import { doc, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { app } from "../../firebase/FirebaseConfig";
import { permanentRedirect, redirect } from "next/navigation";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";

export const Logins = async (formData: FormData) => {
  //get values from the form
  const email = formData.get("emailLogin");
  const password = formData.get("passwordLogin");

  //data en json
  let user = {
    email: email,
    password: password,
  };

  //logins
  const auth = getAuth();
  const db = getFirestore(app);
  const allUsers = await getDocs(collection(db, "users"));
  let userLogin = {};
  allUsers.forEach(async (doc) => {
    //check if the user exists
    if (
      doc.data().email === user.email &&
      doc.data().password === user.password
    ) {
      const email = doc.data().email;
      const password = doc.data().password;
      /*userLogin = {
        email: email,
        password: password,
      };*/
    }
  });
  let data;
  await signInWithEmailAndPassword(auth, email as string, password as string)
    .then((userCredential) => {
      console.log(userCredential.user.email);
      // Signed in
      data = userCredential.user.email;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //rediriect to login page
    });

  userLogin = {
    email: data,
  };

  return {
    userLogin,
  };
};

export const handleLogin = async (FormData: FormData) => {
  'use server';
  const email = FormData.get("emailLogin");
  const password = FormData.get("passwordLogin");
  //Next-Auth login
  try {
  const res = await NextAuth.signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });
  if (res.ok) {
    return {
      user: res.user,
    };
  } else {
    return {
      error: res.error,
    };
  }
} catch (error) {
  return {
    error: error,
  };
}


};
