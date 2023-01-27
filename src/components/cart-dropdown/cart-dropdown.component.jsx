import './cart-dropdown.style.scss';
import Button from '../button/button.component';

const CartDropDown =()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>Go to cart</Button>
        </div>
    )
}

export default CartDropDown;