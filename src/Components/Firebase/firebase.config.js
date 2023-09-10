// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dU9hngRHjMT8xtjyQsmBBOJJ_8tLoIM",
  authDomain: "infinite-mart.firebaseapp.com",
  projectId: "infinite-mart",
  storageBucket: "infinite-mart.appspot.com",
  messagingSenderId: "89201060461",
  appId: "1:89201060461:web:aa6d6a7e4c19627584ed64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;