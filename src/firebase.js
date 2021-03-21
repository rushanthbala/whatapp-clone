import firebase from "firebase";
import 'firebase/app';
// import * as firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "+++++++++",
    authDomain: "+++++++++",
    databaseURL:"+++++++++",
    projectId: "+++++++++",
    storageBucket: "+++++++++",
    messagingSenderId: "+++++++++",
    appId: "+++++++++",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore(firebaseApp)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  const firestore = firebase.firestore()

  export {auth,provider,firestore} ;
  export default db;
