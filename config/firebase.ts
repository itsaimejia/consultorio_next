import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXA6TtpPCpUDNYh9FUulLtXGP4dnCstO4",
  authDomain: "smaedb-b59df.firebaseapp.com",
  databaseURL: "https://smaedb-b59df-default-rtdb.firebaseio.com",
  projectId: "smaedb-b59df",
  storageBucket: "smaedb-b59df.appspot.com",
  messagingSenderId: "226116553576",
  appId: "1:226116553576:web:8f5893a22d3a14ef51a4dd",
  measurementId: "G-8YDJFETQ8L"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
