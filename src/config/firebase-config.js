// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH7BjLczs_2ABAdJUiR0-wtKaZIIxadac",
  authDomain: "expense-tracker-192bb.firebaseapp.com",
  projectId: "expense-tracker-192bb",
  storageBucket: "expense-tracker-192bb.appspot.com",
  messagingSenderId: "512460668820",
  appId: "1:512460668820:web:f235b8c29b1b415c469981",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
