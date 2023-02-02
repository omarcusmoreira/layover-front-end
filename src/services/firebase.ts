// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBDbVPydN3krH7g9iji_e4tjmnkPj04MVs",
  authDomain: "layover-auth.firebaseapp.com",
  projectId: "layover-auth",
  storageBucket: "layover-auth.appspot.com",
  messagingSenderId: "140888161189",
  appId: "1:140888161189:web:66df8af9b5dcb4d3bdc64c",
  measurementId: "G-JM50E7ZYQB"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);