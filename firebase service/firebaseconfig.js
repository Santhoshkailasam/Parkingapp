// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJvqO-tn0l4ONZXNRQBlT7Dt5hehw5woQ",
    authDomain: "react-native-auth-f2ed8.firebaseapp.com",
    projectId: "react-native-auth-f2ed8",
    storageBucket: "react-native-auth-f2ed8.firebasestorage.app",
    messagingSenderId: "904090199046",
    appId: "1:904090199046:web:000e74f7e61649449f8f87"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push };
