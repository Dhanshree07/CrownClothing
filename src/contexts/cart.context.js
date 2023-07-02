import {  createContext,useState,useEffect } from "react";

export const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id) 
    if(existingCartItem){
        return cartItems.map((cartItem)=>
            (cartItem.id===productToAdd.id) ? 
            {...cartItem,quantity: cartItem.quantity+1} : 
            {...cartItem}
        )
    }
    return [...cartItems , {...productToAdd,quantity : 1}]
}

export const removeCartItem = (cartItems,removeItem)=>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===removeItem.id)

    if(removeItem.quantity===1){
        return cartItems.filter((cartItem)=>cartItem.id != removeItem.id)
    }
    
    return cartItems.map((cartItem)=>
            (cartItem.id===removeItem.id) ? 
            {...cartItem,quantity: cartItem.quantity-1} : 
            {...cartItem}
        )
}

export const removeItemfromcart= (cartItems,Item)=>{
    return cartItems.filter((cartItem)=>cartItem.id!=Item.id)
}

export const CartContext = createContext ({
    isCartOpen : false ,
    setIsCartOpen : ()=>{},
    cartItems : [],
    addItemtoCart : ()=>{},
    removeItemtoCart : ()=>{},
    removeItem : ()=>{},
    cartCount : 0,
    cartTotal : 0
})

export const CartProvider = ({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount);
    },cartItems)

    useEffect(()=>{
        const newCartTotal=cartItems.reduce((total,cartItem)=>total+(cartItem.quantity*cartItem.price),0)
        setCartTotal(newCartTotal);
    },cartItems)

    const addItemtoCart = (product)=>{
        setCartItems(addCartItem(cartItems,product))
    }
    const removeItemtoCart = (product)=>{
        setCartItems(removeCartItem(cartItems,product))
    }

    const removeItem = (Item)=>{
        setCartItems(removeItemfromcart(cartItems,Item));
    }
    const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItems,cartCount,removeItemtoCart,removeItem,cartTotal};
    return (
        <CartContext.Provider value={value}> {children}</CartContext.Provider>
    )
}