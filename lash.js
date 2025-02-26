

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDK######################",
  authDomain: "lash-haven.firebaseapp.com",
  projectId: "lash-haven",
  storageBucket: "lash-haven.firebasestorage.app",
  messagingSenderId: "55142##########2",
  appId: "1:551425668102:web:6cb26###############",
  measurementId: "G-3WQFH####JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
