import { initializeApp } from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcSYO1Xz__ItKK4segcvgPL1hARu7tuco",
    authDomain: "crwn-clothing-db-efb01.firebaseapp.com",
    projectId: "crwn-clothing-db-efb01",
    storageBucket: "crwn-clothing-db-efb01.appspot.com",
    messagingSenderId: "538644698292",
    appId: "1:538644698292:web:40e02937d2ba52a22e33e1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
  }
