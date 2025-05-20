import { useState } from "react";

const SignUpForm = () => {
	const defaultFormFields = {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { username, email, password, confirmPassword } = formFields;


	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-form">
			<h2>Sign Up</h2>
			<form onSubmit={() => {}}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Username"
					required
					onChange={handleChange}
               name="username"
               value={username}
				/>
				<label htmlFor="email">Email</label>
            <input
               type="email"
               placeholder="Email"
               required
               onChange={handleChange}
               name="email"
               value={email}
            />
				<label htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="Password"
					required
					onChange={handleChange}
               name="password"
               value={password}
				/>
				<label htmlFor="confirm-password">Confirm Password</label>
				<input
					type="password"
					placeholder="Confirm Password"
					required
					onChange={handleChange}
               name="confirmPassword"
               value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
