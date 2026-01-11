import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fireConfiCode = {
  apiKey: "AIzaSyD7YlFE7M3aijJI-ooZvykvtEdOUA-J65c",
  authDomain: "myrecentapp.firebaseapp.com",
  projectId: "myrecentapp",
  storageBucket: "myrecentapp.firebasestorage.app",
  messagingSenderId: "884238599742",
  appId: "1:884238599742:web:02179502834f2692e3336f",
  measurementId: "G-BWFW19ZHX6"
};

// Initialize Firebase
const myRecentApp = getApps().some(app => app.name === 'pagesApp') 
    ? getApp('pagesApp') 
    : initializeApp(fireConfiCode, 'pagesApp');

const myRecentAuth = getAuth(myRecentApp);
const recentfbProvider = new FacebookAuthProvider();

export { myRecentAuth, recentfbProvider };

