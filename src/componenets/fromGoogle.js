// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYRe19bJBzUPbS1nEBorSMA-bwkxmYqT8",
  authDomain: "jeopardy-react-a7d2f.firebaseapp.com",
  databaseURL: "https://jeopardy-react-a7d2f-default-rtdb.firebaseio.com",
  projectId: "jeopardy-react-a7d2f",
  storageBucket: "jeopardy-react-a7d2f.appspot.com",
  messagingSenderId: "1069679732465",
  appId: "1:1069679732465:web:9991856fb04258b5ac6b50",
  measurementId: "G-GSKZFBKL17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);