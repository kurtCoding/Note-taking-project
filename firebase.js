import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_APP_API_KEY,
  authDomain: import.meta.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app,db}