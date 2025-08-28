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

function Navbar(){
    const [itemAdded, setItemAdded] = useState(false)

    const itemQuantity = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemSize = cartItems.array.length;
    console.log(itemSize);
  }

//     setSelectedProduct(prev => {
//       if (prev && prev.id === product.id && prev.quantity > 0) {
//         return { ...prev, quantity: prev.quantity - 1 }
//       }
//       return { ...product, quantity: 1 }
//     })
//   }

   const navigate = useNavigate(); 
  return (
    <div className='navbar max-w-full object-cover flex justify-between p-4 bg-pink border-b-2 border-darkred shadow-md'>
      <div className='navbar-logo flex text-darkred font-bold text-2xl cursor-pointer gap-2' onClick={() => navigate("/")}>
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
      <HiShoppingBag className='text-darkred text-2xl mx-3 hover:stroke-white-700' onClick={()=> navigate("/f")} />
      <HiOutlineUser className='text-darkred text-2xl mx-3 hover:stroke-white-700'   />
    </div>
<div>
 
</div>
    </div>
  )
}

export default Navbar