// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7PZHP1nmYB7slhk_R7aqi6hCFtCr-3IE",
  authDomain: "todo-ts-747e6.firebaseapp.com",
  projectId: "todo-ts-747e6",
  storageBucket: "todo-ts-747e6.appspot.com",
  messagingSenderId: "1029397974642",
  appId: "1:1029397974642:web:abe9c0b1680f985658bceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialise auth
export const auth = getAuth(app);
