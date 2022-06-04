import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext';
import Wishlist from './Wishlist'


const Navbar = () => {
    const {isAuth,login,logout}=useContext(AuthContext);
    const {islight,toggleTheme}=useContext(ThemeContext);


  return (
    <div>Navbar
        <button onClick={()=>{
            if(isAuth) logout();
            else login("R","Z")
        }}>{isAuth?"Logout":"Login"}</button>
        <button onClick={toggleTheme}>{`Make ${islight ?'dark':'light'}`}</button>
      <Wishlist></Wishlist>
    </div>
  )
}

export default Navbar
