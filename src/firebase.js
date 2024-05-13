import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with y
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJGCL_trlolyDsNcCREey_qq58_24a8g8",
    authDomain: "e-mall-75a6c.firebaseapp.com",
    projectId: "e-mall-75a6c",
    storageBucket: "e-mall-75a6c.appspot.com",
    messagingSenderId: "55678708525",
    appId: "1:55678708525:web:cc05476039fa54b722c1a4",
    measurementId: "G-WK337HN3B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const storage = getStorage(app)