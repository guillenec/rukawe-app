// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:99717032781:web:2a041279068866c1362504",
  measurementId: "G-07J8EJCR5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
