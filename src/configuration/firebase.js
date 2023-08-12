
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC_x1cvFpVPG1ust6qyakCg9JyjtwunL_o",
  authDomain: "rental-d77b0.firebaseapp.com",
  databaseURL: "https://rental-d77b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rental-d77b0",
  storageBucket: "rental-d77b0.appspot.com",
  messagingSenderId: "365507671292",
  appId: "1:365507671292:web:256fff45d564f8efcc1379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app)