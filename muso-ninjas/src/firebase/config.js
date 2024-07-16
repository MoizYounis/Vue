import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9aSEZ2oT9cAq0U5yA3GudFQ3WACbMJxs",
  authDomain: "muso-ninjas-3b1c8.firebaseapp.com",
  projectId: "muso-ninjas-3b1c8",
  storageBucket: "muso-ninjas-3b1c8.appspot.com",
  messagingSenderId: "329064539956",
  appId: "1:329064539956:web:d73aeaf66232a4d4132761",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
