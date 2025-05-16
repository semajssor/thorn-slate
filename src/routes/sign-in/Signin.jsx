import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="signin">
			<h2>Sign In</h2>
			<form>
				<input type="email" placeholder="Email" required />
				<input type="password" placeholder="Password" required />
				<button onClick={logGoogleUser}>Sign in with Google</button>
			</form>
			<p>
				Don't have an account? <a href="/signup">Sign Up</a>
			</p>
		</div>
	);
};
export default SignIn;
