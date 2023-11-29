// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyXfRFANxZQLcyb2_CK0Fqt_yJcyZUm7s",
  authDomain: "last-5a09a.firebaseapp.com",
  projectId: "last-5a09a",
  storageBucket: "last-5a09a.appspot.com",
  messagingSenderId: "727470101711",
  appId: "1:727470101711:web:781f52b33a4f99cb78d3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app)