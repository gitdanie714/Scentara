import React from 'react'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import "../index.css";
import { useState } from 'react'
import '../styles/componentstyle.css'
import '../styles/LandingPage.css'
import CartModal from '../components/CartModal'
import '../styles/modal.css'
import BestSellers from '../components/BestSellers'
import ProductList from '../components/ProductList'

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
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full bg-pink-50">
          <BestSellers />
        </div>
        <div className="w-full">
          <ProductInfo openCart={openCart} />
        </div>
        <div className="w-full bg-pink-50">
          <ProductList />
        </div>
        <div className="w-full">
          <Reviews />
        </div>
      </main>
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        onRequestClose={closeCart}
        items={cartItems}
      />
    </div>
  )
}

export default LandingPage;