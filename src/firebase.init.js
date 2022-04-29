// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6ncvESXgLhyDkAS0PTCnYBq427I1C9Jo",
    authDomain: "warehouse-management-side.firebaseapp.com",
    projectId: "warehouse-management-side",
    storageBucket: "warehouse-management-side.appspot.com",
    messagingSenderId: "683128688320",
    appId: "1:683128688320:web:af4c5f161365774b9da725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;