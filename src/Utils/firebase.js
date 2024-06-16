// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiLWS7nMDjqtlBT6yXneD52yf9PgPWBqw",
  authDomain: "neftflixgpt.firebaseapp.com",
  projectId: "neftflixgpt",
  storageBucket: "neftflixgpt.appspot.com",
  messagingSenderId: "612781993570",
  appId: "1:612781993570:web:abdb727fecfd3fb33f2b3b",
  measurementId: "G-Y1D1RYKDLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
