import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaMz7IJmSrgqXMuSAHUkOJtuPrikjGEhM",
  authDomain: "node-escalab-backend.firebaseapp.com",
  projectId: "node-escalab-backend",
  storageBucket: "node-escalab-backend.appspot.com",
  messagingSenderId: "616845105660",
  appId: "1:616845105660:web:b5017ed7d13ea1dae73a79",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider();
