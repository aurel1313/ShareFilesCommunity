import {initializeApp } from 'firebase/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-8yw_-aKDCx-MwZL98G1ToeYNNMnnd3M",
    authDomain: "sharefiles-f42b1.firebaseapp.com",
    projectId: "sharefiles-f42b1",
    storageBucket: "sharefiles-f42b1.appspot.com",
    messagingSenderId: "361745875653",
    appId: "1:361745875653:web:95cef324405a9a679226ac"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
export {app,auth};
