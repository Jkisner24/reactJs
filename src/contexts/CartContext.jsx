import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const GContext = createContext();

const CartContext = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };

/*     const addItem = (item, quantity) => {
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
 */    /* const isInCart = (item) => {
      return cartItems.find((element) => element.item === item);
    };
    const clear = () => {
      setCartItem([])
    };
    const removeItem = (itemId) => {
      setCartItem(cartItems.filter((element)=> element.item.id !== itemId))
    }; 
   */

    // addDoc(orderCollection, order)
    //   .then((res) => console.log(res.id))
    //   .catch((err) => console.log("error", err));

    const batch = writeBatch(db);
    const idList = cartItems.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Your oder number is: ${addResponse.id}`);
    } else {
      alert(
        "The purchase wasn't completed. There aren't enough items in stock"
      );
    }
  };

  // const updateOrder = () => {
  //   const db = getFirestore();
  //   const docRef = doc(db, "items", "PatNxY6HFkj2NWjdBiQD");
  //   updateDoc(docRef, { price: 500 })
  //     .then((res) => alert("Order updated"))
  //     .catch((err) => alert("Order update failed"));
  // };

  // const multipleUpdates = () => {
  //   const db = getFirestore();
  //   const docRef = doc(db, "orders", "yFNkyYhtywT0QBmpI9W1");
  //   const docWithoutPrice = doc(db, "orders", "0eVkTcqobXQvsYyeQTwv");
  //   batch.update(docRef, { total: 180 });
  //   batch.update(docWithoutPrice, {
  //     buyer: { mail: "test", name: "test", phone: "1111" },
  //   });
  //   batch.commit();
  // };

  return (
    <GContext.Provider
      value={{
        setCartItems,
        cartItems,
        sendOrder,
        //addItem,
        //isInCart,
        //clear,
        //removeItem,
        // updateOrder,
        // multipleUpdates,
      }}
    >
      {children}
    </GContext.Provider>
  );
};

export default CartContext;
