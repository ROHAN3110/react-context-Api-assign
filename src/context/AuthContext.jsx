import { useState } from "react";
import { createContext } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[isAuth,setisAuth]=useState(false);

    const login=(username,password)=>{
       
            setisAuth(!isAuth);
        
    }
        const logout=()=>{
            
            setisAuth(!isAuth);
            }
            return(
                <AuthContext.Provider value={{isAuth,login,logout}}>{children}
                </AuthContext.Provider>
                
            )
    
}