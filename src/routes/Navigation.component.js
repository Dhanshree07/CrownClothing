import { Outlet ,Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import './navigation.styles.scss';
import {signOutUser} from '../firebase.utils.js'
import CartIcon from "../Components/carticon/CartIcon";
import CartDropDown from "../Components/cart-dropdown/CartDropdown";
import { CartContext } from "../contexts/cart.context";

function Navigation(){
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>Logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                        ): (
                            <Link to='/auth' className="nav-link">Sign In</Link>
                        ) 
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet/>
        </>
    )
}
export default Navigation;