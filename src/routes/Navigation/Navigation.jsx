import { Outlet, Link } from "react-router-dom";
import "./Navigation.styles.scss"

const Navigation = () => {
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
					<Link className="nav-link" to="/sign-in">
						Sign In
					</Link>
				</nav>

				
         </div>
         <Outlet />
		</>
	);
};

export default Navigation;
