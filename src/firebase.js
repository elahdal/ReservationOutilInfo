// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATtJZkjIYxfSPj-Gf0-0f6iAHpYQyp_jA",
  authDomain: "qualite-logiciel-project-e8.firebaseapp.com",
  projectId: "qualite-logiciel-project-e8",
  storageBucket: "qualite-logiciel-project-e8.appspot.com",
  messagingSenderId: "822528870014",
  appId: "1:822528870014:web:3d4179894f80c763c3ba2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export {db,auth};