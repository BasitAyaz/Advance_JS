// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCRJ8gR8lZlkNa-FwrZiBmKAvRdk-N5g",
  authDomain: "class2-7d3a1.firebaseapp.com",
  databaseURL: "https://class2-7d3a1-default-rtdb.firebaseio.com",
  projectId: "class2-7d3a1",
  storageBucket: "class2-7d3a1.appspot.com",
  messagingSenderId: "913305278598",
  appId: "1:913305278598:web:5710d868b5c309caaed907",
  measurementId: "G-SQENCVTBDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let userLogin = (obj) => {
  console.log(obj);
};

let signUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

export { userLogin, signUp };
