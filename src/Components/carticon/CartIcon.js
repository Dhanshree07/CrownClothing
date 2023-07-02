import './carticon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleisCartOpen =()=>{
        setIsCartOpen(!isCartOpen )
    }
    return (
        <div className='cart-icon-container' onClick= {toggleisCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;