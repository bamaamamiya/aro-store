// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYKNxjgd5uvE4-ZosFn4t7tnZgYwIB9yU",
  authDomain: "yodi-lp.firebaseapp.com",
  projectId: "yodi-lp",
  storageBucket: "yodi-lp.firebasestorage.app",
  messagingSenderId: "356875330353",
  appId: "1:356875330353:web:bec19df65caa7b5d7dc610",
  measurementId: "G-7HN0BB0KDT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
