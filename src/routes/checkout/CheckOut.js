import { useContext,useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss'
import CheckOutItem from "../../Components/checkout/CheckOutItem";

const CheckOut = ()=>{
    const {cartItems,cartTotal}=useContext(CartContext);
    const [qty,setqty]=useState(0);
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {
                cartItems.map((cartItem)=>
                    <CheckOutItem cartItem={cartItem} key={cartItem.id}/>
                )
            }
            <span className="total">Total : ${cartTotal}</span>
        </div>
    )    
}

export default CheckOut;