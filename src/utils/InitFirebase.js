// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBYk-C8SvzOOcMGvkQlDBsQhNeHT0qVacM",
  authDomain: "hachaton-969c2.firebaseapp.com",
  projectId: "hachaton-969c2",
  storageBucket: "hachaton-969c2.appspot.com",
  messagingSenderId: "385499973688",
  appId: "1:385499973688:web:5ca58625fc0917e8c6fecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authh = getAuth(app);
