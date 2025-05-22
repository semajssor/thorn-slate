import { useContext } from "react";
import "./ProductCard.scss";
import Button from "../button/Button";
import { CartContext } from "../../contexts/Cart";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	}

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={name} className="product-card_image" />
			<div className="product-card_footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
