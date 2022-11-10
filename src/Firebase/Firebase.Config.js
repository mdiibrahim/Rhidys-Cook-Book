// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGAeegrnGCV7D5UNUhOMMQ1rHq7Xn5ckI",
  authDomain: "rhidys-cook-book.firebaseapp.com",
  projectId: "rhidys-cook-book",
  storageBucket: "rhidys-cook-book.appspot.com",
  messagingSenderId: "547014378648",
  appId: "1:547014378648:web:4d5ac3313816ab71e5fced"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);