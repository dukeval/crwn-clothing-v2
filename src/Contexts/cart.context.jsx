import { createContext, useState } from "react";


export const CartContext = createContext({
    active: false,
    setIsActive: ()=> {},
});


export const CartProvider = ({children})=>{
    const [active, setIsActive] = useState(false);
    const value = {active, setIsActive};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}