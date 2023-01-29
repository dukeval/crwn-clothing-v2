import './product-card.style.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart.context';

const ProductCard =({product})=>{
    const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = ()=> addItemToCart(product);
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonStyleType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;