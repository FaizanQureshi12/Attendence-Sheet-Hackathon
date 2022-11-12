  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBRHUKts1G21BjqNuLbw6W4EQpr9CQiUCU",
    authDomain: "sheet-hackathon.firebaseapp.com",
    projectId: "sheet-hackathon",
    storageBucket: "sheet-hackathon.appspot.com",
    messagingSenderId: "1051854782879",
    appId: "1:1051854782879:web:ad0823a47ad8a27e36fdaa"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);