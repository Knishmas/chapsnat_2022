import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import "firebase/firebase-firestore";


// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
    apiKey: "AIzaSyAEqcjf2mnWoC_UaFkMyDrFgIGjtYIbqQg",
    authDomain: "chapsnat-e55b6.firebaseapp.com",
    projectId: "chapsnat-e55b6",
    storageBucket: "chapsnat-e55b6.appspot.com",
    messagingSenderId: "980627951515",
    appId: "1:980627951515:web:c622975c3eb755b9801b3e",
    measurementId: "G-6BBCBD4KV5"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let firestore = firebase.firestore();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;