import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD0K-eGKF_nWMInHhJInbqFWCsiZgBWeaQ",
    authDomain: "food-4eb80.firebaseapp.com",
    databaseURL: "https://food-4eb80-default-rtdb.firebaseio.com",
    projectId: "food-4eb80",
    storageBucket: "food-4eb80.appspot.com",
    messagingSenderId: "761828869602",
    appId: "1:761828869602:web:bbef2940978c7ce9c065bb"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
