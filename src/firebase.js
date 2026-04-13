import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAxT3OdXYrLBC288r2j48IOTe5BFhr8swo",
  authDomain: "barangayappointmentsyste-998b2.firebaseapp.com",
  projectId: "barangayappointmentsyste-998b2",
  storageBucket: "barangayappointmentsyste-998b2.firebasestorage.app",
  messagingSenderId: "641127048115",
  appId: "1:641127048115:web:f42b416b290cf32a0da1c6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;