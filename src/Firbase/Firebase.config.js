// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDO6gUoXD65EXxqX6Go2LfG_Krk_v7M3c",
  authDomain: "roommate-finder-app-9ff2c.firebaseapp.com",
  projectId: "roommate-finder-app-9ff2c",
  storageBucket: "roommate-finder-app-9ff2c.firebasestorage.app",
  messagingSenderId: "983798652166",
  appId: "1:983798652166:web:ad3291a7e4c3fd10655287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
