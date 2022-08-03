import React, { createContext, useState } from "react";
export const GContext = createContext();

const CartContext = ({children}) => {
  const [cartItems, setCartItem] = useState([]);
  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem){
      quantity = quantity + newItem.quantity;
      setCartItem(
        cartItems.splice(
          cartItems.findIndex((element) => element.item.id === item.id),
          1
      )
    );
    }
    setCartItem([...cartItems, {item, quantity}])
  };
  const isInCart = (item) => {
    return cartItems.find((element) => element.item === item);
  };
  const clear = () => {
    setCartItem([])
  };
  const removeItem = (itemId) => {
    setCartItem(cartItems.filter((element)=> element.item.id !== itemId))
  }; 

  return <GContext.Provider value={{ cartItems, setCartItem, addItem, removeItem, clear}}>{children}</GContext.Provider>
  ;
};

export default CartContext;
