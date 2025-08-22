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
    // <div className="landing-container">
    // <Navbar openCart={openCart}/>
    // <Header />
    // <ProductInfo />
    // <BestSellers  openCart={openCart}/>
    // <Reviews />
    // <Footer />
    // <CartModal
    //   modalState={isCartOpen} 
    //   onRequestClose={closeCart}
    //   className="cart-modal"
    //   overlayClassName="cart-modal-overlay"> 

    //  <button className="close-modal" onClick={closeCart}>X</button>
    // <h2>Cart Items</h2>
    // <ul>
    //   {cartItems && cartItems.length >= 1 ? (
    //     cartItems.map(item => (
    //       <li key={item.id}>
    //         {item.name} - ${item.price} x {item.quantity}
    //       </li>
    //     ))
    //   ) : (
    //     <li>No items in the cart</li>
    //   )}
    // </ul>
    // </CartModal>
    // </div>

    //Tailwind version
    <div className="grid grid-rows-[100px 1fr 1fr 1fr 1fr 100px] ">
    <Navbar className="row-[1]" openCart={openCart}/>
    <Header className="row-[2]"/>
    <ProductInfo className="row-[3]"/>
    <BestSellers className="row-[4]" openCart={openCart}/>
    <Reviews className="row-[5]"/>
    <Footer className="row-[6]"/>
    <CartModal
      modalState={isCartOpen} 
      onRequestClose={closeCart}
      className="cart-modal"
      overlayClassName="cart-modal-overlay"> 

     <button className="close-modal" onClick={closeCart}>X</button>
    <h2>Cart Items</h2>
    <ul>
      {cartItems && cartItems.length >= 1 ? (
        cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))
      ) : (
        <li>No items in the cart</li>
      )}
    </ul>
    </CartModal>
    </div>
  )
}

export default LandingPage;