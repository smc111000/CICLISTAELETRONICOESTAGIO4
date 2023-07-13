import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD8QzZC_EIsOAqiKE7k05ums4m5YH6yE_E",
  authDomain: "cilistaeletronico4.firebaseapp.com",
  projectId: "cilistaeletronico4",
  storageBucket: "cilistaeletronico4.appspot.com",
  messagingSenderId: "782835144910",
  appId: "1:782835144910:web:9cb810ce664939d697189f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
