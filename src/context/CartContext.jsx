import React, {createContext, useState} from "react";

export const CartContext = createContext();

 export const CartProvider=({children})=>{
   const [count,setcount]=useState(0);

   const addToCart=()=>{
       setcount(count+1)
   }

   const buy=()=>{
       
   }
   return <CartContext.Provider value={{count,addToCart}}>{children}</CartContext.Provider>
 }