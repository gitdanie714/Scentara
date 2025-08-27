import React from 'react'
import productDetails from '../constants/ProductDetails';
import { useState } from 'react';
import ReactModal from 'react-modal'
import { FaCartPlus } from 'react-icons/fa';
function ProductDisplay() {

      ReactModal.setAppElement('#root')

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  
    setTimeout(() => {
    setModalIsOpen(false)
  },5000);

//   const addQuantity = (product) => {
//     setSelectedProduct(prev => {
//       if (prev && prev.id === product.id) {
//         return { ...prev, quantity: prev.quantity + 1 }
//       }
//       return { ...product, quantity: 1 }
//     })
//   }

//   const removeQuantity = (product) => {
//     setSelectedProduct(prev => {
//       if (prev && prev.id === product.id && prev.quantity > 0) {
//         return { ...prev, quantity: prev.quantity - 1 }
//       }
//       return { ...product, quantity: 1 }
//     })
//   }

      const AddtoCart = (product) => {
    setSelectedProduct({ ...product, quantity: 1 })
    setModalIsOpen(true)
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existingProduct = cartItems.find(item => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cartItems.push({ ...product, quantity: 1 })
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-evenly '>
            <h1 className='items-center text-2xl text-darkred font-mono '>Your Popular Perfume Brands at Affordable Prices</h1>

        </div>

        <div className="bg-pink-100 p-6 rounded-lg shadow-lg  w-full ">
             <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
             {productDetails.map(product => (
          <div key={product.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
            <span className="text-pink-600 font-bold mb-2">${product.price}</span>
             <div className=' flex justify-end items-left '>
                <FaCartPlus 
              onClick={() => AddtoCart(product)} 
              className='text-darkred text-2xl text-left'
            />
            </div>
          </div>
              ))}
         </div>
             
    </div>
          <ReactModal 
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Product Details"
          className="product-modal flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6"
          overlayClassName="product-modal-overlay fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
        >
          {selectedProduct && (
            <div className="text-center">
              <button 
                onClick={() => setModalIsOpen(false)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >X</button>
              <h2 className="text-2xl font-bold mb-2 text-pink-600">Added to Cart</h2>
              <p className="text-gray-700">{selectedProduct.name} has been added to your cart.</p>
            </div>
          )}
        </ReactModal>

 </div>
  )
  }

export default ProductDisplay;