import React from 'react'
import "../styles/componentstyle.css"
import { useState } from 'react'
import { GiFlowers } from "react-icons/gi"
import ReactModal from 'react-modal'
import '../styles/modal.css'
import CartModal from './CartModal'
import productDetails from '../constants/ProductDetails'
import { HiShoppingBag, HiOutlineUser } from "react-icons/hi"
import { useNavigate } from 'react-router-dom'

function Navbar() { 
   const navigate = useNavigate(); 
  return (
    <div className='navbar flex justify-between p-4 bg-darkred shadow-md'>
      <div className='navbar-logo flex text-white font-bold text-2xl cursor-pointer gap-2' onClick={() => navigate("/")}>
        <span>Scentara</span> 
        <GiFlowers className='items-baseline' />
        </div>
      <div className='flex-auto justify-center items-center'>
        <ul className='flex justify-around items-center text-white font-semibold'>    
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul>
    </div>
    <div className="flex items-center ">
      <HiShoppingBag className='text-white text-2xl mx-3 hover:stroke-white-700' onClick={()=> navigate("/checkout")} />
      <HiOutlineUser className='text-white text-2xl mx-3 hover:stroke-white-700' />
    </div>
<div>
 
</div>
    </div>
  )
}

export default Navbar