// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfXNvakclhEGCsNq-WjQ2NBbEsk24t85s",
  authDomain: "bookingsystem-b54da.firebaseapp.com",
  projectId: "bookingsystem-b54da",
  storageBucket: "bookingsystem-b54da.firebasestorage.app",
  messagingSenderId: "765936497391",
  appId: "1:765936497391:web:b593bbcf8298db1e92611a",
  measurementId: "G-JD95L2709W"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const gooAuthProvider = new GoogleAuthProvider()

const createWithEmail = async(email, password) =>{
    try {
       const response = await createUserWithEmailAndPassword(auth, email, password);
       const user = response.user;
       return user;
       
    } catch (err) {
        console.error('Error creating user:', err)
        throw(err);
    }
}

const signWithloginAndAccount = async(email, password) =>{
    try {
       const res = await signInWithEmailAndPassword(auth, email, password);
       return res;
    } catch (error) {
        console.error('Error creating user:', error)
        throw(error);
    }
}


const forgetPassword = async(email) =>{
    try {
        await sendPasswordResetEmail(auth, email);
        
    } catch (error) {
        console.error('Error creating user:', error)
        throw(error);
    }
}

const signInWithGoogle = async()=>{
    try {

        const res = await signInWithPopup(auth, gooAuthProvider)
        const user = res.user;
        return user;
        
    } catch (error) {
        console.error('Error creating user:', error)
        throw(error);
    }
}

export {createWithEmail, signWithloginAndAccount, auth, forgetPassword, signInWithGoogle}