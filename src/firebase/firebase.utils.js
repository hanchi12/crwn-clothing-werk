import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGUO7U5P9cmR7MB3FSySjqTucYGkGix2E",
  authDomain: "quantum-plasma-238608.firebaseapp.com",
  databaseURL: "https://quantum-plasma-238608.firebaseio.com",
  projectId: "quantum-plasma-238608",
  storageBucket: "quantum-plasma-238608.appspot.com",
  messagingSenderId: "1080073343335",
  appId: "1:1080073343335:web:18641162ef3a3b123b1fc2",
  measurementId: "G-ZTN0GQ5FF1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
