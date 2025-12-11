// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// !! REPLACE WITH YOUR ACTUAL CONFIGURATION !!
const firebaseConfig = {
  apiKey: "AIzaSyBtqeTinpAjjxW3KoInIizSZydJdkH6xoM",
  authDomain: "swamisamarth-44a5b.firebaseapp.com",
  projectId: "swamisamarth-44a5b",
  storageBucket: "swamisamarth-44a5b.firebasestorage.app",
  messagingSenderId: "168470569650",
  appId: "1:168470569650:web:27d25fcc53abd7a3f55fab",
  measurementId: "G-4FESXB52M4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// You do not need getStorage since we are using Cloudinary for images

// The user you designate as the admin must be created in the Firebase Authentication console.