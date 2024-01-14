// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_-ucOXmqA7KfzmhMWiUXaZQB7Gup9y0A",
  authDomain: "ecommercepf-ff6ad.firebaseapp.com",
  projectId: "ecommercepf-ff6ad",
  storageBucket: "ecommercepf-ff6ad.appspot.com",
  messagingSenderId: "326182677605",
  appId: "1:326182677605:web:d9ed2945820947df776a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app)