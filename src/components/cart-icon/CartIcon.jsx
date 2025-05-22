import './CartIcon.scss';
import ShoppingBag from "../../assets/shopping-bag.svg?react";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleCartOpen = () => setIsCartOpen(!isCartOpen);


   return (
			<div className="cart-icon-container" onClick={toggleCartOpen}>
				<ShoppingBag className="cart-icon" />
				<span className="item-count">{cartCount}</span>
			</div>
		);
}

export default CartIcon;