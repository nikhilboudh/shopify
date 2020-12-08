import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBALs7AbiOgLTfumoOoA_dRWfkG0LiNn5M",
    authDomain: "shopifyekart.firebaseapp.com",
    databaseURL: "https://shopifyekart.firebaseio.com",
    projectId: "shopifyekart",
    storageBucket: "shopifyekart.appspot.com",
    messagingSenderId: "20297920481",
    appId: "1:20297920481:web:f220333cbbd7b02ab0aca0",
    measurementId: "G-T1LRYZ98L9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};