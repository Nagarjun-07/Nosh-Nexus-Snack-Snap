// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzcTxUSjexnaxmwB-tv0sQUgoLpLaTasI",
  authDomain: "snacksnap-1453d.firebaseapp.com",
  projectId: "snacksnap-1453d",
  storageBucket: "snacksnap-1453d.appspot.com",
  messagingSenderId: "1084544125210",
  appId: "1:1084544125210:web:588ecb0a4f3420a1d644a3",
  measurementId: "G-59EVH6CZ95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics only in the client-side
// eslint-disable-next-line no-unused-vars
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export const db = getFirestore(app);
