import './cart-dropdown.style.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropDown =()=>{
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    
    const buttonClickHandler=()=>{
        navigate('/checkout');
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))}
            </div>
            <Button onClick={buttonClickHandler}>Go to cart</Button>
        </div>
    )
}

export default CartDropDown;