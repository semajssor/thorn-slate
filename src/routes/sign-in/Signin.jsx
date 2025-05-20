import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import {
   auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="signin">
			<h2>Sign In</h2>
			<input type="email" placeholder="Email" required />
			<input type="password" placeholder="Password" required />
         <button onClick={logGoogleUser}>Sign in with Google</button>
         <SignUpForm />
		</div>
	);
};
export default SignIn;
