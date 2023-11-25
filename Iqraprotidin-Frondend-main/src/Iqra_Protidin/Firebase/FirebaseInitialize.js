import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
// Firebase Initialized
const FirebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
