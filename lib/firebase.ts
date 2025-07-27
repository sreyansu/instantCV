// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuAQCj02gzle5vF1FB4HGS6BlMtVZwpwY",
  authDomain: "instantcv-c59db.firebaseapp.com",
  projectId: "instantcv-c59db",
  storageBucket: "instantcv-c59db.firebasestorage.app",
  messagingSenderId: "826708786660",
  appId: "1:826708786660:web:ad00055099539ac427dbf1",
  measurementId: "G-GTXDBYEMZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
