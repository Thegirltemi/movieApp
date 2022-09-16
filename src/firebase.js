// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcXqOUoCIAJ1b_b67AZed6Ff2pe95AKSc",
  authDomain: "auth-movieapp.firebaseapp.com",
  projectId: "auth-movieapp",
  storageBucket: "auth-movieapp.appspot.com",
  messagingSenderId: "871307897784",
  appId: "1:871307897784:web:e00d0fdd05646b1d78bd4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);