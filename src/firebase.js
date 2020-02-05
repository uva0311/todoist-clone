import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAcruAstQ9RKEa7p39dOX1WR5P9-SNyT9g',
  authDomain: 'todoist-db-97cd6.firebaseapp.com',
  databaseURL: 'https://todoist-db-97cd6.firebaseio.com',
  projectId: 'todoist-db-97cd6',
  storageBucket: 'todoist-db-97cd6.appspot.com',
  messagingSenderId: '23415951096',
  appId: '1:23415951096:web:16350a89d983e80fe9b50d',
  measurementId: 'G-R38YJXH9Z2'
});

export { firebaseConfig as firebase };
