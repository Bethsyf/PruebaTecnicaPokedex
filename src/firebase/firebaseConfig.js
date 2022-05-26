import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAtyZawqQmfkqGb2uPmLsi1rc2Vy6i5c0",
  authDomain: "pokedex-ceb18.firebaseapp.com",
  projectId: "pokedex-ceb18",
  storageBucket: "pokedex-ceb18.appspot.com",
  messagingSenderId: "825840346378",
  appId: "1:825840346378:web:8a7e063aef2e90133f46f3"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const DB = getFirestore()

export {
  app,
  google,
  facebook,
  DB
}  