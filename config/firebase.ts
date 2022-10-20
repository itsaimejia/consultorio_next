import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyATqOeHy4mJE4HpfhjZGXToHkFtoNDXpW4",
    authDomain: "smae-vicki.firebaseapp.com",
    databaseURL: "https://smae-vicki-default-rtdb.firebaseio.com",
    projectId: "smae-vicki",
    storageBucket: "smae-vicki.appspot.com",
    messagingSenderId: "57493659928",
    appId: "1:57493659928:web:e692a92596521e98dbfe6d",
    measurementId: "G-VX4FHB393Q"
  };
  
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)