// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt8QMHKeODVwUA4FM45iDhyoeb-2PSgHw",
  authDomain: "react-firebase-3ffab.firebaseapp.com",
  projectId: "react-firebase-3ffab",
  storageBucket: "react-firebase-3ffab.appspot.com",
  messagingSenderId: "1020354417904",
  appId: "1:1020354417904:web:2e45106f9104225b965e35"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// buat user baru
const signUp = async (email, kataSandi) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, kataSandi);
        console.log("Pengguna baru sudah dibuat");
        alert("Yeayyy!!! Akun Anda sudah dibuat");
    } catch (err) {
        console.log("CODE" + err.code);
        console.log("MESSAGE" + err.message);
    }
}

// masuk dengan fitur login

const signIn = async (email, kataSandi) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, kataSandi);
        console.log("Anda berhasil masuk!")
        alert("Anda berhasil masuk!")
    } catch (err) {
        console.log("CODE" + err.code);
        console.log("MESSAGE" + err.message);
    }
}

// keluar dari akun

const logOut = async () => {
    try {
        await signOut(auth);
        alert("Anda sudah keluar!")   
    } catch (err) {

    }
    
  };

export { auth, signUp, signIn, logOut};