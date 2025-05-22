import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { CartContext } from "../../contexts/Cart";
import "./Navigation.scss"
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import Logo from "../../assets/Thorn+Slate_logo.svg?react";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className="navigation">
				<Link className="logo-container nav-link" to="/">
					<Logo className="logo" />
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
					<CartIcon />
				</nav>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
