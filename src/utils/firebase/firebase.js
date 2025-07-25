import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});
	return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
	return onAuthStateChanged(auth, callback);
}

export const renameCategoryInFirestore = async (oldTitle, newTitle) => {
	const categoriesCollectionRef = collection(db, 'categories');

	try {
		 const oldDocId = oldTitle.toLowerCase();
		 const oldDocRef = doc(categoriesCollectionRef, oldDocId);
		 const docSnapshot = await getDoc(oldDocRef);

		 if (docSnapshot.exists() && docSnapshot.data().title.toLowerCase() === oldTitle.toLowerCase()) {
			  const batch = writeBatch(db);

			  const docData = docSnapshot.data();


			  const newDocId = newTitle.toLowerCase();


			  const newDocRef = doc(categoriesCollectionRef, newDocId);


			  batch.set(newDocRef, { ...docData, title: newTitle });

			  batch.delete(oldDocRef);

			  await batch.commit();
			  console.log(`Successfully renamed category from Document ID: '${oldDocId}' to Document ID: '${newDocId}'.`);
			  console.log(`Also updated the 'title' field from '${docData.title}' to '${newTitle}'.`);
		 } else {
			  console.log(`Category with title/ID '${oldTitle}' not found or title mismatch.`);
		 }

	} catch (error) {
		 console.error("Error renaming category:", error);
		 throw error;
	}
};