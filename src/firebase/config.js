
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAye3W5x29dbcsd75ff21OCRUJnudbLCiQ",
  authDomain: "implementos-agricolas-66c41.firebaseapp.com",
  projectId: "implementos-agricolas-66c41",
  storageBucket: "implementos-agricolas-66c41.appspot.com",
  messagingSenderId: "870423321535",
  appId: "1:870423321535:web:2d95e9d770157ac3ff1f0a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)