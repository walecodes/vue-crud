import {firebase} from '@firebase/app';
import '@firebase/firestore';
// import 'firebase/firebase-auth';
// import 'firebase/storage';

// Initialize Firebase
  // Your web app's Firebase configuration
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
  };

  // Initialize Firebase
const fb = firebase.initializeApp(config);
const db = firebase.firestore();

export {fb, db};