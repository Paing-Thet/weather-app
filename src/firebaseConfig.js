import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATsp84nUo4rjmOyOHxALvKkFn_cy3-cIQ",
    authDomain: "weatherapp-53b4c.firebaseapp.com",
    projectId: "weatherapp-53b4c",
    storageBucket: "weatherapp-53b4c.appspot.com",
    messagingSenderId: "349939297975",
    appId: "1:349939297975:web:5a1184c0dfae43e854e732",
    measurementId: "G-2ZDHMEPKK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
