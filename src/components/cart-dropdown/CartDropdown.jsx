import { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();


	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
