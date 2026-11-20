import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1M5ZWVbvwcVvjU7GW89Rkz8lWA305VOc",
  authDomain: "social-media-four.firebaseapp.com",
  projectId: "social-media-four",
  storageBucket: "social-media-four.firebasestorage.app",
  messagingSenderId: "1025577097342",
  appId: "1:1025577097342:web:e2a74fa7059b17e7ada02f",
  measurementId: "G-RJ0J9D83TG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
