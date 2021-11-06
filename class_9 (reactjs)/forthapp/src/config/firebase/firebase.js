import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbCRJ8gR8lZlkNa-FwrZiBmKAvRdk-N5g",
  authDomain: "class2-7d3a1.firebaseapp.com",
  projectId: "class2-7d3a1",
  storageBucket: "class2-7d3a1.appspot.com",
  messagingSenderId: "913305278598",
  appId: "1:913305278598:web:5710d868b5c309caaed907",
  measurementId: "G-SQENCVTBDH",
};
export default initializeApp(firebaseConfig);
