import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import "./Navigation.scss"
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<div className="navigation">
				<Link className="logo-container nav-link" to="/">
					<img className="logo" src="/assets/Thorn+Slate_logo.svg" alt="logo" />

					<h2>Thorn & Slate</h2>
				</Link>

				<nav className="nav-links-container">
					<Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<Link className="nav-link" to="/auth" onClick={signOutUser}>
							Sign Out
						</Link>
					) : (
						<Link className="nav-link" to="/auth">
							Sign In
						</Link>
					)}
				</nav>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
