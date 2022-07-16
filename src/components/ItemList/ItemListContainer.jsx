import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer(props){

    const ItemsDATABASE =[
      {
        id: 1,
        title: "oxycodone hydrochloride",
        price: 563,
        category: "Ethex Corporation",
        stock: 10,
      }, 
      {
        id: 2,
        title: "BETULA NIGRA POLLEN",
        price: 357,
        category: "ALK-Abello, Inc.",
        stock: 9,
      }, 
      {
        id: 3,
        title: "DEXAMETHASONE Sodium Phosphate",
        price: 95,
        category: "Physicians Total Care, Inc.",
        stock: 6,
      }, 
      {
        id: 4,
        title: "Lovastatin",
        price: 699,
        category: "American Health Packaging",
        stock: 10
      }, 
      {
        id: 5,
        title: "Dexamethasone",
        price: 560,
        category: "Roxane Laboratories, Inc",
        stock: 3,
      }
];

  let [items, setItems] = useState ([]);

  useEffect(
  () =>{
     let promiseItems = new Promise ((resolve, reject) => {
      setTimeout(
        () => {
          resolve(ItemsDATABASE);
        },
    
     2000);
  
  });

  promiseItems.then(
    (respuesta) => {
      setItems(ItemsDATABASE);
    }
  ).catch(
    (errorMsg) => console.error(errorMsg)
  )
},
  []
)

return (
  <ItemList dataitems={items}/>
);
}

export default ItemListContainer;

