import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "./utils/data.json";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner"



const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(false)
  const promise = new Promise ((resolve) => {
    setTimeout(() => resolve(data), 3000)
  });

  const getItem = ()=> {
    promise.then((res) =>{
     const products = res;
     if (name) {
       setItems(products.filter((product) => product.category == name))
     }else {
      setItems(products);
     }
      setLoading(false);
  })
};

  useEffect (() => {
      setLoading(true)
      getItem();
  
  }, [name]);

  if (loading) return <Spinner/>;
  
  return (
  <>
      <div className="mt-5">
      <ItemList items={items} />
      </div>
  </>
  );
};

export default ItemListContainer;