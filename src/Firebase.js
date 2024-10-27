import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQSToLZzUMc36w5bCqG_aIh3J7eO5WZ1U",
  authDomain: "clone-app-4c967.firebaseapp.com",
  projectId: "clone-app-4c967",
  storageBucket: "clone-app-4c967.appspot.com",
  messagingSenderId: "663852685789",
  appId: "1:663852685789:web:913a722b952f63dc6d3e34",
  measurementId: "G-VLJ1C2KNET"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}