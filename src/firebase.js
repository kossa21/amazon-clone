import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0BW0s06lg3Y6P6C2qdWT44vcwzUiGULg",
  authDomain: "challenge-anandamaya.firebaseapp.com",
  databaseURL: "https://challenge-anandamaya.firebaseio.com",
  projectId: "challenge-anandamaya",
  storageBucket: "challenge-anandamaya.appspot.com",
  messagingSenderId: "718363280280",
  appId: "1:718363280280:web:e1fb593e38d53be4a321ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };