// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import  'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDiw9nGYoW1V35vrRN8937fU6_XnwOqWlY",
    authDomain: "clone-3eeca.firebaseapp.com",
    projectId: "clone-3eeca",
    storageBucket: "clone-3eeca.appspot.com",
    messagingSenderId: "555717520773",
    appId: "1:555717520773:web:01ae1ee2a327899a34a8ec",
    measurementId: "G-9KSQEFBYWX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth}
 
