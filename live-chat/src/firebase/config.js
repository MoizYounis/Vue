import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOanVUffDzgYKmyysHG9ex31OzTaIQrfQ",
  authDomain: "chatroom-72f43.firebaseapp.com",
  projectId: "chatroom-72f43",
  storageBucket: "chatroom-72f43.appspot.com",
  messagingSenderId: "934981687019",
  appId: "1:934981687019:web:946348db65375fd993d0ae",
};

// init firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
