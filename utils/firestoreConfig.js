
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD8nLFuMQYnEpB49izfeUfJuBr1HjGo5Gc",
  authDomain: "portfolio-ec485.firebaseapp.com",
  projectId: "portfolio-ec485",
  storageBucket: "portfolio-ec485.appspot.com",
  messagingSenderId: "348782593569",
  appId: "1:348782593569:web:21f901727135f36a2f8560",
  measurementId: "G-VCJP2KBMDG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)


export {Auth, Provider, db, storage};

