import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(GContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item, quantity) => {
      total += parseInt(item.price)* quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map(({ item, quantity }) => (
        <>
        <div key={item.id} className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={item.pictureUrl}
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{`${item.stock} units available!`}</p>
            <p className="card-text">{`$${
              ((item.price * item.discount) / 100) * quantity
            } | with a ${item.discount}% discount!`}</p>
          </div>
        </div>
         </>))}
      </ul>
      <h1 className="bg-primary">{`Your total is: $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;
