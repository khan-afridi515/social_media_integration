
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const myFirebaseConfig = {
  apiKey: "AIzaSyCmtkzvwSZBTvLuc3WPFcLpn2NfFbWT8c8",
  authDomain: "reactnewproject-d6ace.firebaseapp.com",
  projectId: "reactnewproject-d6ace",
  storageBucket: "reactnewproject-d6ace.firebasestorage.app",
  messagingSenderId: "444990340832",
  appId: "1:444990340832:web:3488305bb75d6c5fea9a85",
  measurementId: "G-EEFBL8RV5V"
};



const myApp = getApps().some(app => app.name === 'pagesApp') 
    ? getApp('pagesApp') 
    : initializeApp(myFirebaseConfig, 'pagesApp');

const myAuth = getAuth(myApp);
const fbProvider = new FacebookAuthProvider();

export { myAuth, fbProvider };

