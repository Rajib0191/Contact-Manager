import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA9lTPqJ9Xr10ntIGNLQvDxJDPsZhrLUBk",
    authDomain: "react-auth-50008.firebaseapp.com",
    projectId: "react-auth-50008",
    storageBucket: "react-auth-50008.appspot.com",
    messagingSenderId: "525954530272",
    appId: "1:525954530272:web:85d1304d961a31542fc985",
    measurementId: "G-21GSM0ZRGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;