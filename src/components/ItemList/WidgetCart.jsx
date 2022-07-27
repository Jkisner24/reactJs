import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const WidgetCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="ps-4">
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="ps-2">{cartItems.length}</span>
    </div>
  );
};

export default WidgetCart;
