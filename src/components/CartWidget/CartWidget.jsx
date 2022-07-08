import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const CartWidget = () => {

    const amount = 2 ;

    return(
        <>
        <FontAwesomeIcon icon={faCartShopping}/>
        {amount}
        </>
   );
};

export default CartWidget;