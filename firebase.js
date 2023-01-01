import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBSbP-NXuH1kB-TUhRjuUExop-U46wH7DY",
    authDomain: "letflix-f6955.firebaseapp.com",
    projectId: "letflix-f6955",
    storageBucket: "letflix-f6955.appspot.com",
    messagingSenderId: "326972602886",
    appId: "1:326972602886:web:ccaf4a9c7acf5c4e36a187",
    measurementId: "G-SR5W1FHD8L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth, db };
