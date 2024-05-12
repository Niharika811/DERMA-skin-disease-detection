
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCG2GMpMHsSPLZuFDNxSLh63tSP4BLN-ig",
  authDomain: "skin-app-b814e.firebaseapp.com",
  databaseURL: "https://skin-app-b814e-default-rtdb.firebaseio.com/",
  projectId: "skin-app-b814e",
  storageBucket: "skin-app-b814e.appspot.com",
  messagingSenderId: "371490540670",
  appId: "1:371490540670:web:b37fcb7ea3354eeafc1c2f",
  measurementId: "G-QZ922N3X9S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


export { auth, database};

