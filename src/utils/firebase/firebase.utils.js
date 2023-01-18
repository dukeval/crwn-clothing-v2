import { initializeApp } from 'firebase/app'
import { getAuth,GoogleAuthProvider, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWv_KMJwTqghCdDCSLJmreuUkGcYN3BFs",
    authDomain: "crwn-clothing-db-82a9d.firebaseapp.com",
    projectId: "crwn-clothing-db-82a9d",
    storageBucket: "crwn-clothing-db-82a9d.appspot.com",
    messagingSenderId: "775288146047",
    appId: "1:775288146047:web:0c56162186c32a66fbd74a"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:"select_account"});

export const auth = getAuth();
export const signInWithGooglePopup= ()=> signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, otherInputData={})=>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists())
  {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt,
        ...otherInputData
      });
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword= async(email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
  
  return await signInWithEmailAndPassword(auth,email,password);
}