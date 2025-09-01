import React, { useEffect } from 'react'
import "../styles/componentstyle.css"
import { useState } from 'react'
import { GiFlowers } from "react-icons/gi"
import ReactModal from 'react-modal'
import '../styles/modal.css'
import CartModal from './CartModal'
import productDetails from '../constants/ProductDetails'
import { HiOutlineUser } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../constants/CartContext'
import { useContext } from 'react'

function Navbar(){
   const navigate = useNavigate(); 
   ReactModal.setAppElement('#root') 
  const { cart } = useContext(CartContext);
 

  return (
    <div className='navbar max-w-full object-cover flex justify-between p-4 bg-pink border-b-2 border-daronClick={() => navigate("/")kred shadow-md'>
      <div className='navbar-logo flex text-darkred font-bold text-2xl cursor-pointer gap-2'>
        <span>Scentara</span> 
        <GiFlowers className='flex items-center' />
        </div>
      <div className='flex-auto flex justify-center items-center'>
        <ul className='flex gap-8 items-center text-darkred font-semibold'>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul>
    </div>
    <div className="flex items-center max-w-7xl mx-auto px-4">
      <HiOutlineUser className='text-darkred text-2xl mx-3 hover:stroke-white-700'   />
      <Link to="/checkout">
<FaShoppingCart
  className="text-darkred text-2xl mx-3 hover:stroke-white-700 cursor-pointer"
/>
</Link>
        {cart.length > 0 && (
          <span className="absolute top-2 right-3 bg-darkred text-white text
            -xs font-mono px-2 rounded-full">
            {cart.length}
          </span>
        )}
      
    </div>
<div>
 
</div>
    </div>
  )
}

export default Navbar