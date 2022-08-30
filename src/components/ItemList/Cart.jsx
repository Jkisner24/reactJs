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
            <div className="row justify-content-center mt-5">
            <div key={item.id} className="card col-4">
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
            </div>
          </>
        ))}
      </ul>
        <h3 className="bg-success w-50 container text-center">{`Your total is: $${totalPrice}`}</h3>
        <form onSubmit={handleSubmit}>
        <div className="row justify-content-center text-center">
        <div className="col-md-7">
        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Mike Johnson"/>
        </div>
        <div className="col-md-7">
        <label htmlFor="inputEmail4" className="form-label ">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="col-md-7">
        <label htmlFor="inputCity" className="form-label">Telephone number</label>
          <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="115869210" />
        </div>
        </div>
        <div className="row justify-content-center text-center">
        <button type="submit" className="btn btn-info w-50 mt-3 ">
          Send order
        </button>
        </div>
      </form>
    </>
  );
};

export default Cart;
