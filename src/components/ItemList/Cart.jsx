import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder } = useContext(GContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
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
                alt="Card cap"
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
        <label for="formGroupExampleInput" className="form-label">Name </label>
        <input type="text" className="form-control-sm" id="formGroupExampleInput" placeholder="Mike Johnson"/>
        <input type="email" className="form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com"/>
        <input type="tel" />
        <button
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
