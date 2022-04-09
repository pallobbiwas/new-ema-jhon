// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFkg4XD-dN3jHA9tuUiAtTZ1ch8n_DcgQ",
  authDomain: "ema-jhon-shope-30570.firebaseapp.com",
  projectId: "ema-jhon-shope-30570",
  storageBucket: "ema-jhon-shope-30570.appspot.com",
  messagingSenderId: "287138214275",
  appId: "1:287138214275:web:381fe5a35fa1b68c16c6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;