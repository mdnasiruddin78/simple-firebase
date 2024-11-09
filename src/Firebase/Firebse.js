// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBocG8PmYyLgioaVWRkqojgsqSsnRgLMAA",
  authDomain: "dimple-firebase-35527.firebaseapp.com",
  projectId: "dimple-firebase-35527",
  storageBucket: "dimple-firebase-35527.firebasestorage.app",
  messagingSenderId: "948503653927",
  appId: "1:948503653927:web:a9abb437702636d6caa802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);