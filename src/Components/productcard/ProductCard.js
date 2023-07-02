import Button from '../button/Button'
import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard =({product})=>{

    const {addItemtoCart} =useContext(CartContext);
    
    const addProductToCart = ()=>{addItemtoCart(product);console.log('item added')}
    
    const {name,imageUrl,price}=product;
    
    return (
        <div className='product-card-container'>
            <img alt='${name}' src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;