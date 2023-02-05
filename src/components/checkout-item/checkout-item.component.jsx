import { useContext } from "react";

import { CartContext } from "../../Contexts/cart.context";
import './checkout-item.style.scss'

const CheckOutItem = ({cartItem})=>{
    const {imageUrl, name, quantity, price} = cartItem;
    const { removeItemFromCart, increaseCartItem,reduceCartItem } = useContext(CartContext)

    const itemRemoveHandler=()=>{
        console.log('ready to remove');
        removeItemFromCart(cartItem);
    }

    const reduceCount=()=>{
        reduceCartItem(cartItem)
    }

    const increaseCount=()=>{
        increaseCartItem(cartItem);
    }

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'><div className="arrow" onClick={reduceCount}>&#10094;</div><span className="value">{quantity}</span><div className="arrow" onClick={increaseCount}>&#10095;</div></span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={itemRemoveHandler}>&#10005;</div>
        </div>
    );
}

export default CheckOutItem;