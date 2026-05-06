// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_wV8uJM198ZrfUUR_LSOAlUgMkqCLi9E",
  authDomain: "testreactapp-473ff.firebaseapp.com",
  projectId: "testreactapp-473ff",
  storageBucket: "testreactapp-473ff.firebasestorage.app",
  messagingSenderId: "15692640654",
  appId: "1:15692640654:web:fa13676baa16e85a0fb4df",
  measurementId: "G-TR6X1YSQFS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const newfiberApp = getApps().some(app => app.name === 'facePagesApp') 
    ? getApp('facePagesApp') 
    : initializeApp(firebaseConfig, 'facePagesApp');

const newfiberAuth = getAuth(newfiberApp);
const newfiberfbProvider = new FacebookAuthProvider();

export { newfiberAuth, newfiberfbProvider };