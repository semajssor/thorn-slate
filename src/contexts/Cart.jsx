import { createContext, useState } from "react";

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
export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   // const [cartItems, setCartItems] = useState([]);
   const value = {isCartOpen, setIsCartOpen};


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
      // const addItemToCart = (productToAdd) => {
   //    setCartItems((prevCartItems) => {
   //       const existingCartItem = prevCartItems.find(
   //          (cartItem) => cartItem.id === productToAdd.id
   //       );

   //       if (existingCartItem) {
   //          return prevCartItems.map((cartItem) =>
   //             cartItem.id === productToAdd.id
   //                ? { ...cartItem, quantity: cartItem.quantity + 1 }
   //                : cartItem
   //          );
   //       }

   //       return [...prevCartItems, { ...productToAdd, quantity: 1 }];
   //    });
   // };