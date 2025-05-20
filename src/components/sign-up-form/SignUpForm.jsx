import { useState } from "react";
import FormInput from "../form-input/FormInput";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../button/Button";
import "./SignUpForm.scss";

const SignUpForm = () => {
	const defaultFormFields = {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { username, email, password, confirmPassword } = formFields;


	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, { displayName: username });
			setFormFields(defaultFormFields);
			
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else if (error.code === "auth/weak-password") {
				alert ("Password should be at least 6 characters");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Username"
					type="text"
					required
					onChange={handleChange}
					name="username"
					value={username}
				/>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
