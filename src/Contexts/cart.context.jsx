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

export const CartContext = createContext({
    active: false,
    setIsActive: ()=> {},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount:0
});


export const CartProvider = ({children})=>{
    const [active, setIsActive] = useState(false);
    const [cartItems, setCartItems]= useState([]);
    const [cartCount, setCartCount]=useState(0);


    useEffect(()=>{
        const cartTotal = cartItems.reduce((accumalator,currentValue)=>accumalator + currentValue.quantity,0);
        setCartCount(cartTotal);
    },[cartItems]);


    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    };

    const value = {active, setIsActive, addItemToCart,cartItems, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}