import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext, } from 'react'


const Cart = () => {
    const {count,addToCart}=useContext(CartContext)
    
  return (
    <div>cart
      <button onClick={addToCart}>Add to cart
      </button>
    </div>
  )
}

export default Cart
