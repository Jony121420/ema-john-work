
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5JVGtaeO5BjEMolQigwk-Y-JY5jFVpJE",
  authDomain: "ema-john-firebase-e1960.firebaseapp.com",
  projectId: "ema-john-firebase-e1960",
  storageBucket: "ema-john-firebase-e1960.appspot.com",
  messagingSenderId: "736755571993",
  appId: "1:736755571993:web:0b55503942dbdd5c50f988"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;