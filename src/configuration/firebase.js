
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBKprXEZxrwBqpVzt4ySwMoai7rF-5e31A",
  authDomain: "first-fa438.firebaseapp.com",
  projectId: "first-fa438",
  storageBucket: "first-fa438.appspot.com",
  messagingSenderId: "488833416999",
  appId: "1:488833416999:web:72224daba7da4fc1a3b302",
  measurementId: "G-95DVR3V7YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);