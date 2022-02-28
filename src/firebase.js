import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyBq4HwnsXEJpUi-rCo5MXlrxdJYkAmndw0",
        authDomain: "website-6f0a3.firebaseapp.com",
        projectId: "website-6f0a3",
        storageBucket: "website-6f0a3.appspot.com",
        messagingSenderId: "60312613611",
        appId: "1:60312613611:web:286d8706ede509a32dc4ae"
      });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};