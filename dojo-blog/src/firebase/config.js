import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOanVUffDzgYKmyysHG9ex31OzTaIQrfQ",
  authDomain: "chatroom-72f43.firebaseapp.com",
  projectId: "chatroom-72f43",
  storageBucket: "chatroom-72f43.appspot.com",
  messagingSenderId: "934981687019",
  appId: "1:934981687019:web:d0024f7e312afc3e93d0ae",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
