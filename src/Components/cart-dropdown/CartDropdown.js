import './cartdropdowm.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropDown = ()=>{
    const {cartItems}= useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = ()=>navigate('/checkout');
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartitem={cartItem} />
            ))) :(
                <span className='empty-message'>Your cart is empty</span>
            )}          
            </div>
            <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
        </div>
    )
}

export default CartDropDown;