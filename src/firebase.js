
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "preboardresult.firebaseapp.com",
  projectId: "preboardresult",
  storageBucket: "preboardresult.appspot.com",
  messagingSenderId: "717890382529",
  appId: "1:717890382529:web:99d933c33744bb26df0240",
  measurementId: "G-89NX72235K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;