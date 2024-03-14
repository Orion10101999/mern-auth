// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b47b4.firebaseapp.com",
  projectId: "mern-auth-b47b4",
  storageBucket: "mern-auth-b47b4.appspot.com",
  messagingSenderId: "784397476043",
  appId: "1:784397476043:web:ec377b710600340fc5bb4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);