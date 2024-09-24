// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRK4VTWUPKyUs55wx-_7mLk9zL4bP3tPg",
  authDomain: "materiales-rukawe.firebaseapp.com",
  projectId: "materiales-rukawe",
  storageBucket: "materiales-rukawe.appspot.com",
  messagingSenderId: "86155096443",
  appId: "1:86155096443:web:ec74fd9c9360a6a4748dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
