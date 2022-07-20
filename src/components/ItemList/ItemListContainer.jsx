import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "./utils/data.json";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const { name } = useParams();
    console.log(name);
    const [items, setItems] = useState ([]);
    const promise = new Promise ((resolve) => {
      setTimeout(() => resolve(data), 3000)
    });

    useEffect (() => {
        promise.then((res) =>{
          const products = res;
          if (name) {
           setItems(products.filter((product) => product.category == name))
      }else {
        setItems(products);
      }

    });
    
    }, [name]);
    
    return (
    <>
        <div className="mt-5">
        <ItemList items={items} />
        </div>
    </>
  );
};

export default ItemListContainer;