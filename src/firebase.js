import firebase from 'firebase/app';
import 'firebase/firestore';

/* insert your own configuration to get the app work if you are downloading the project for further modification*/

const firebaseConfig = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
});

export { firebaseConfig as firebase };
