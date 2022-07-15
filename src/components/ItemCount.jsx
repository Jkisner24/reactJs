import { useState } from "react";
import {Card, Button} from "react-bootstrap";


const ClickTracker = () => {
    const [count, setCount] = useState(1);
    const registarClick = (operacion) => {
        if (operacion === "-" && count > 0) {
            setCount(count-1);
        }else if (operacion === "+" && count < 6){
            setCount(count+1);
        }
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../comida.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <button onClick={()=> registarClick("-")}>-</button>
        {count} 
        <button onClick={()=> registarClick("+")}>+</button>
        <Button variant="success">Agregar al carrito</Button>
        </Card.Body>
        </Card>
        </>
    )
};

export default ClickTracker;