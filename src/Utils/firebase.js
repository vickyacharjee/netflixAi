// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG01qUJFctVPBQLKvY7r4B3B94lci1fW4",
  authDomain: "netflixgpt-75f83.firebaseapp.com",
  projectId: "netflixgpt-75f83",
  storageBucket: "netflixgpt-75f83.firebasestorage.app",
  messagingSenderId: "641334727825",
  appId: "1:641334727825:web:fc4043db40091e15afdb30",
  measurementId: "G-9CJ4GM6PPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();