import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
/*   const addItem= (item,quantity)=>{
      let index = isInCart(item.id);
      if(index>-1){
          let Cart = cartItems;
          Cart[index].quantity+=quantity;
          setCartItems(Cart)
      }else{
          setCartItems((prevState) => [...prevState, {...item,"quantity":quantity}])
      }
  }
  const howManyItems = ()=>{return cartItems.length}
  const removeItem = (itemId)=>{
      let Cart = cartItems;
      console.log(Cart);
      Cart.splice(isInCart(itemId),1);
      console.log(Cart);
      setCartItems(Cart)
  }
  const clear = ()=>{setCartItems([])}
  const isInCart = (id)=>{return cartItems.findIndex(e=>{return e.id === id ? true : false })}
  console.log(cartItems) */
return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
