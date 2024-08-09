// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbtwLlffEABxWpyztFtd6M_sEcWHjfoqk",
  authDomain: "pantry-tracker-f6a6f.firebaseapp.com",
  projectId: "pantry-tracker-f6a6f",
  storageBucket: "pantry-tracker-f6a6f.appspot.com",
  messagingSenderId: "217547622139",
  appId: "1:217547622139:web:a0e40e02141672078f925e",
  measurementId: "G-NKFHW7X8P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};