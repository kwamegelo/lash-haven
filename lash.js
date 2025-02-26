

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDKwBbTEazM6gau4PCq6f9VWrknb3q3z4",
  authDomain: "lash-haven.firebaseapp.com",
  projectId: "lash-haven",
  storageBucket: "lash-haven.firebasestorage.app",
  messagingSenderId: "551425668102",
  appId: "1:551425668102:web:6cb26a777da06371d1ff87",
  measurementId: "G-3WQFH7MRJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);