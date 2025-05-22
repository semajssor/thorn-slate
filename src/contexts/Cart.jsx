import { createContext, use, useEffect, useState } from "react";

export const CartContext = createContext({
      isCartOpen: false,
      setIsCartOpen: () => null,
      cartItems: [],
      addItemToCart: () => null,
      removeItemFromCart: () => null,
      clearItemFromCart: () => null,
      cartCount: 0,
      cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {

   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
   );
   
   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }
   
   return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);
	
   useEffect(() => {
      const newCartCount = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity,
         0
      );
      setCartCount(newCartCount);
   }
   , [cartItems]);


	const addItemToCart = (productToAdd) => {
	   setCartItems(addCartItem(cartItems, productToAdd));
   };

   const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}