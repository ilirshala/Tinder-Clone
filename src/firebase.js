import firebase from  'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDc3UAjPh3Wbmo4KAvVKSzkBHKxqApOLk",
    authDomain: "tinder-clone-e396c.firebaseapp.com",
    databaseURL: "https://tinder-clone-e396c.firebaseio.com",
    projectId: "tinder-clone-e396c",
    storageBucket: "tinder-clone-e396c.appspot.com",
    messagingSenderId: "828735981002",
    appId: "1:828735981002:web:799bf22f7d6d205ce13b33",
    measurementId: "G-8MXNVGP7LG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;