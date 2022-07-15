import React from "react";


function ItemList( props ){

    console.log("Render ItemList", props.items);

    return(
        <>
        <h1>ItemList</h1>
        {
            props.items.map(
                cadaItem => {
                return (<div key={cadaItem.id}>
                <p> {cadaItem.title} </p>
                <p> {cadaItem.category}</p>
                <hr/>
                </div>
                )
                }
            )
        }
        </>
    );
}

export default ItemList;