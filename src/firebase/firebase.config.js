// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBssJJKD2CAUlJ0wFRSvs8siCXNQkPsxSo",
    authDomain: "edtech-assignmnet.firebaseapp.com",
    projectId: "edtech-assignmnet",
    storageBucket: "edtech-assignmnet.appspot.com",
    messagingSenderId: "177469734374",
    appId: "1:177469734374:web:8ae186f4ca1fe8d639ea27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;