import { Link } from "react-router-dom";

const Item = ({item}) =>{
    const {title, price, stock, pictureUrl, id} = item;
    return(
        <div className="card" style = {{width: "30rem"}}>
            <img className= "card-img-top" src={pictureUrl} alt="Card img"/>
            <div className="card-body d-flex flex-colum justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} units available!`}</p>
                <Link to={`item/${id}`}>
                    <button className="btn- btn-primary">see product details</button>
                </Link>
            </div>
        </div>
    )

}

export default Item;