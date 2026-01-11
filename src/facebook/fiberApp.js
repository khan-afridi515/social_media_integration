// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const addFiber = {
  apiKey: "AIzaSyDgef8sMMswUYF93RKXOS5N4bLmnXZVWZ4",
  authDomain: "myworkapp-76920.firebaseapp.com",
  projectId: "myworkapp-76920",
  storageBucket: "myworkapp-76920.firebasestorage.app",
  messagingSenderId: "727723279390",
  appId: "1:727723279390:web:50ea416305c614fd2b5a0f",
  measurementId: "G-312V9EBFFF"
};

// Initialize Firebase
const myFiberApp = getApps().some(app => app.name === 'fiberPagesApp') 
    ? getApp('fiberPagesApp') 
    : initializeApp(addFiber, 'fiberPagesApp');

const fiberAuth = getAuth(myFiberApp);
const fiberfbProvider = new FacebookAuthProvider();

export { fiberAuth, fiberfbProvider };