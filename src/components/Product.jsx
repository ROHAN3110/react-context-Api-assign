import React from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'
import { useContext } from 'react'

const Product = () => {
    const {isAuth}=useContext(AuthContext);
  return (
    <div>Product:{isAuth ?"loggedIn":"logedOut"}
      <Cart></Cart>
    </div>
  )
}

export default Product
