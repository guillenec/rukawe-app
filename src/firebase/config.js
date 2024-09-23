// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFPxplKe52KzRgF6rAiOdW9ibID0Xjow",
  authDomain: "esrnstock.firebaseapp.com",
  projectId: "esrnstock",
  storageBucket: "esrnstock.appspot.com",
  messagingSenderId: "99717032781",
  appId: "1:99717032781:web:a81900271ddd4ba5362504",
  measurementId: "G-3PF2K9ZB75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
