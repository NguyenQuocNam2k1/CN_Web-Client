import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEBJiGDVkx9zf4tQT63J9ZirekqOl8WAc",
  authDomain: "cnweb-c5420.firebaseapp.com",
  projectId: "cnweb-c5420",
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "776157218787",
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);