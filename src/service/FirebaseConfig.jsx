// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzCTpo_u9CyNnVh1tDTW-dpmqFi_A40Z4",
  authDomain: "aitrip-28f97.firebaseapp.com",
  projectId: "aitrip-28f97",
  storageBucket: "aitrip-28f97.appspot.com",
  messagingSenderId: "567870810800",
  appId: "1:567870810800:web:57263cf92f0fce9368e975",
  measurementId: "G-XGD7J9B612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
