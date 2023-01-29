import { useContext } from 'react';
import { ReactComponent as SHOPPINGCARTBUTTON} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../Contexts/cart.context';

import './cart-icon.style.scss';

const CartIcon = ()=>{
    const {active, setIsActive,cartCount } = useContext(CartContext);
    //const cartTotal = cartItems.reduce((accumalator,currentValue)=>accumalator + currentValue.quantity,0);
    const toggleIsActive = ()=> {
        setIsActive(!active);}

    return (
        <div className='cart-icon-container' onClick={toggleIsActive}>
            <SHOPPINGCARTBUTTON className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;