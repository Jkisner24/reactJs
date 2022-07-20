import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detailedItems from "./utils/details.json";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const id = useParams();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(detailedItems), 3000); 
    });
    useEffect(() =>{
        promise.then((response)=> {
            const foundItem = response.filter( item.id == id)
            setItem(foundItem[0])
        });
    },[]);

    return <ItemDetail item={item} />;
    
};

export default ItemDetailContainer;