// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBEHOPnaCFR-QNnxFhTyKRbfFxv9JuGVM",
  authDomain: "myreactapp-6175f.firebaseapp.com",
  projectId: "myreactapp-6175f",
  storageBucket: "myreactapp-6175f.firebasestorage.app",
  messagingSenderId: "849500725998",
  appId: "1:849500725998:web:45e66c56ec6f40accf09ff",
  measurementId: "G-K1L5LCGCMX"
};

// Initialize Firebase
const myApp = getApps().some(app => app.name === 'pagesApp') 
    ? getApp('pagesApp') 
    : initializeApp(firebaseConfig, 'pagesApp');

const myNewAuth = getAuth(myApp);
const NewfbProvider = new FacebookAuthProvider();

export { myNewAuth, NewfbProvider };
