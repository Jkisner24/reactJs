import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder } = useContext(GContext);
  useContext(GContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
    // updateOrder();
    // multipleUpdates();
  };
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
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
          </>
        ))}
      </ul>
        <h1 class="bg-primary">{`Your total is: $${totalPrice}`}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button
          // onClick={() => sendOrder(totalPrice)}
          type="submit"
          className="btn btn-info"
        >
          Send order
        </button>
      </form>
    </>
  );
};

export default Cart;
