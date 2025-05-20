import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: `${import.meta.env.VITE_FIREBASE_APIKEY}`,
	authDomain: `${import.meta.env.VITE_FIREBASE_AUTHDOMAIN}`,
	projectId: `${import.meta.env.VITE_FIREBASE_PROJECTID}`,
	storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGEBUCKET}`,
	messagingSenderId: `${import.meta.env.VITE_FIREBASE_MSGSENDERID}`,
	appId: `${import.meta.env.VITE_FIREBASE_APPID}`,
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   console.log(userDocRef);
   const userSnapshot = await getDoc(userDocRef);
   
   if (!userSnapshot.exists()) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
         });
      } catch (error) {
         console.log("error creating the user", error.message);
      }
   }

   return userDocRef;
}