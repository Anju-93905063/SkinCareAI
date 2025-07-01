import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJSTUkWOGmV7rCPuOj2RMZXoyalUnM0Ck",
  authDomain: "testing-a63c4.firebaseapp.com",
  projectId: "testing-a63c4",
  storageBucket: "testing-a63c4.firebasestorage.app",
  messagingSenderId: "460031272764",
  appId: "1:460031272764:web:2f26f7080618d31bcfa039",
  measurementId: "G-KTW40QFMXP"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, app };
