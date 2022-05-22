import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUVaJrzi0WaPKNoCme0gcNQhRp_W2w85g",
  authDomain: "pokedex-9c7eb.firebaseapp.com",
  projectId: "pokedex-9c7eb",
  storageBucket: "pokedex-9c7eb.appspot.com",
  messagingSenderId: "795895959593",
  appId: "1:795895959593:web:2c1b5823a990f9c4014c38"
};

const app = initializeApp(firebaseConfig);
  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  const DB = getFirestore()
  
  export{
    app,
    google, 
    facebook,
    DB
  }  