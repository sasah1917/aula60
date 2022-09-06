import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDaBoD26N3yu58YDocuMzQA22ZVbUELjRc",
  authDomain: "campainha2-8c0eb.firebaseapp.com",
  databaseURL: "https://campainha2-8c0eb-default-rtdb.firebaseio.com",
  projectId: "campainha2-8c0eb",
  storageBucket: "campainha2-8c0eb.appspot.com",
  messagingSenderId: "255193146048",
  appId: "1:255193146048:web:3d19ef3bf104a02e5f0325",
  measurementId: "G-NGFDML0PZX"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
