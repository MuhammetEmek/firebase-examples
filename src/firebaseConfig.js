// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWRQDnyPWiBCqfwC9ObRfyFKaeXHTiBU",
  authDomain: "mkk-firebase-web.firebaseapp.com",
  projectId: "mkk-firebase-web",
  storageBucket: "mkk-firebase-web.appspot.com",
  messagingSenderId: "42964359866",
  appId: "1:42964359866:web:fe72015b7e063a730d8083",
  measurementId: "G-LZLPYCDXG6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);