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
   const { cart } = useContext(CartContext);
   const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
 

  return (
    <nav className='sticky top-0 z-50 w-full bg-pink border-b-2 border-darkred shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to="/" className='flex items-center text-darkred font-bold text-2xl gap-2'>
              <span>Scentara</span>
              <GiFlowers className='h-6 w-6' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center justify-center flex-1'>
            <div className='flex space-x-8'>
              <Link to="/" className='text-darkred hover:text-opacity-75 px-3 py-2 font-semibold'>Home</Link>
              <Link to="/products" className='text-darkred hover:text-opacity-75 px-3 py-2 font-semibold'>Products</Link>
              <Link to="/about" className='text-darkred hover:text-opacity-75 px-3 py-2 font-semibold'>About Us</Link>
              <Link to="/contact" className='text-darkred hover:text-opacity-75 px-3 py-2 font-semibold'>Contact</Link>
              <Link to="/shop" className='text-darkred hover:text-opacity-75 px-3 py-2 font-semibold'>Shop</Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className='flex items-center space-x-4'>
            <button className='text-darkred p-2 hover:text-opacity-75'>
              <HiOutlineUser className='h-6 w-6' />
            </button>
            <Link to="/checkout" className='text-darkred p-2 hover:text-opacity-75 relative'>
              <FaShoppingCart className='h-6 w-6' />
              {totalQuantity > 0 && (
                <span className='absolute -top-1 -right-1 bg-darkred text-white text-xs font-bold px-2 py-1 rounded-full'>
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar