// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import{getStorage} from"firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqWLbADuLNndqGUQPQqUL9xWVn2vt1JvM",
  authDomain: "pet-help-75378.firebaseapp.com",
  projectId: "pet-help-75378",
  storageBucket: "pet-help-75378.firebasestorage.app",
  messagingSenderId: "24892548125",
  appId: "1:24892548125:web:f19765bdec4d0ac85412f4",
  measurementId: "G-Y9G67DVJSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Storage =getStorage(app)

// Initialize Auth & Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export const db = getFirestore(app);
export const storage=getStorage(app);
