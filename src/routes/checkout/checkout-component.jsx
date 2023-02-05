import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../Contexts/cart.context";

import './checkout-style.scss';

const CheckOut=()=>{
    const { cartItems, cartTotal} = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {cartItems.map((item)=>(
                <CheckOutItem key={item.id} cartItem={item} />

            ))}
                    <div className="total">
                        Total: ${cartTotal}
                    </div>
        </div>
    )

}

export default CheckOut;