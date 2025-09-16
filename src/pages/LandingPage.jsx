import React from 'react'
import Header from '../components/Header'
import ProductInfo from '../components/BestSellers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import "../index.css";
import { useState } from 'react'
import '../styles/componentstyle.css'
import '../styles/LandingPage.css'
import CartModal from '../components/CartModal'
import '../styles/modal.css'
import BestSellers from '../components/ProductInfo'
import ProductDisplay from '../components/ProductList'

function LandingPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

const cartItems = JSON.parse(localStorage.getItem('cartItems'));


  const openCartModal = () => {
     setIsCartOpen(true);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    if (cartItems.length > 0) { 
      // Logic to open cart modal
      console.log("Cart items:", cartItems)
    } else {
      console.log("Cart is empty")
    }
  }

  return (
    //Tailwind version
    <div className="grid grid-rows-[auto auto auto auto auto auto auto] w-full max-w-screen overflow-x-auto">
    <Header className="row-[2]"/>
    <ProductInfo className="row-[4]" openCart={openCart}/>
    <BestSellers className="row-[3]"/>
    <ProductDisplay className="row-[5]"/>
    <Reviews className="row-[6]"/>
    <Footer className="row-[7]"/>
    </div>
  )
}

export default LandingPage;