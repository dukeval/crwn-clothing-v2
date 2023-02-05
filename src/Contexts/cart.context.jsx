import { createContext, useEffect, useState } from "react";

const addCartItem=(cartItems, productToAdd)=>{
    //found if item is in cart
    const existingCartItem = cartItems.find((el)=> el.id === productToAdd.id);

    //if found, increment quantity
    if(existingCartItem)
    {
        return cartItems.map((el) => el.id === productToAdd.id ? {...el,quantity:el.quantity+1} : el );
    }

    return [...cartItems, {...productToAdd,quantity:1}];
}

const removeCartItem=(cartItems,itemToRemove)=>{
    const existingItemIndex = cartItems.indexOf(itemToRemove);

    if(existingItemIndex>=0){
        cartItems.splice(existingItemIndex,1);
    }
    return [...cartItems];
}

const increaseCartItemQuantity=(cartItems,cartItemToIncrease)=>{
    const existingCartItem = cartItems.find((el)=> el.id === cartItemToIncrease.id);
    
    if(existingCartItem)
    {
        return cartItems.map((el)=> el.id === cartItemToIncrease.id? {...el, quantity:el.quantity+1}:el);
    }
}

const reduceCartItemQuantity=(cartItems,cartItemToDerease)=>{
    const existingCartItem = cartItems.find((el)=> el.id === cartItemToDerease.id);
    
    if(existingCartItem && existingCartItem.quantity>1)
    {
        return cartItems.map((el)=> el.id === cartItemToDerease.id? {...el, quantity:el.quantity-1}:el);
    }
    else
        return removeCartItem(cartItems,cartItemToDerease);
}

export const CartContext = createContext({
    active: false,
    setIsActive: ()=> {},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    increaseCartItem:()=>{},
    reduceCartItem:()=>{},
    cartCount:0,
    cartTotal:0,
});


export const CartProvider = ({children})=>{
    const [active, setIsActive] = useState(false);
    const [cartItems, setCartItems]= useState([]);
    const [cartCount, setCartCount]=useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const cartTotal = cartItems.reduce((accumalator,currentValue)=>accumalator + currentValue.quantity,0);
        setCartCount(cartTotal);
    },[cartItems]);

    useEffect(()=>{
        const cartTotalCost = cartItems.reduce((prev,current)=>prev + (current.quantity * current.price),0);
        setCartTotal(cartTotalCost);
    },[cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeItemFromCart =(itemToRemove)=>{
        setCartItems(removeCartItem(cartItems,itemToRemove));
    }

    const increaseCartItem =(itemToRemove)=>{
        setCartItems(increaseCartItemQuantity(cartItems,itemToRemove));
    }

    const reduceCartItem =(itemToRemove)=>{
        setCartItems(reduceCartItemQuantity(cartItems,itemToRemove));
    }

    const value = {active, setIsActive, addItemToCart,removeItemFromCart,increaseCartItem,reduceCartItem, cartItems, cartCount, cartTotal};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}