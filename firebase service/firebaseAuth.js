// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJvqO-tn0l4ONZXNRQBlT7Dt5hehw5woQ",
  authDomain: "react-native-auth-f2ed8.firebaseapp.com",
  projectId: "react-native-auth-f2ed8",
  storageBucket: "react-native-auth-f2ed8.firebasestorage.app",
  messagingSenderId: "904090199046",
  appId: "1:904090199046:web:000e74f7e61649449f8f87"
};

let auth;
if (getApps().length === 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),  // Correct the usage here
  });
} else {
  auth = getAuth();  // Use the already initialized auth instance
}

export default auth;