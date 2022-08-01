import React, { createContext, useState } from "react";

export const GContext = createContext();

const CartContext = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem){
      quantity = quantity + newItem.quantity;
      setCartItems(
        cartItems.splice(
          cartItems.findIndex((element)=> element.item.id === item.id),
      1
      )
    )
    };
    setCartItems([...cartItems, {item, quantity}])
  };
  const isInCart = (item) => {
    cartItems.find((element) => element.item === item);
  };
  const clear = () => {
    setCartItems([])
  };
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((element)=> element.item.id != itemId))
  }; 

  return (
    <GContext.Provider value={{ cartItems, addItem }}>
      {children}
    </GContext.Provider>
  );
};

export default CartContext;
