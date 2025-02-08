// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getReactNativePersistence} from "firebase/auth"
import ReactNativeAsyncsStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOPyHy_P--gwbrh2GrW2jaVxhjnjtxFVQ",
  authDomain: "project-pr1.firebaseapp.com",
  projectId: "project-pr1",
  storageBucket: "project-pr1.firebasestorage.app",
  messagingSenderId: "495493118861",
  appId: "1:495493118861:web:179541ed10c0790b92dbc4",
  measurementId: "G-TGLNN8H41B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncsStorage)
})
export const dp=getFirestore(app)
const analytics = getAnalytics(app);