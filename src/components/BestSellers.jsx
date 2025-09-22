import React, { useState } from 'react'
import "../styles/componentstyle.css"
import CartModal from './CartModal'
import { CartContext } from '../constants/CartContext'
import { useEffect } from 'react'
import '../styles/modal.css' 
import { Link } from 'react-router-dom'
import productDetails from '../constants/ProductDetails'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function BestSellers() {
  const { addToCart } = React.useContext(CartContext);
  const [addedModalOpen, setAddedModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)

   // Auto-close modal
    useEffect(() => {
    if (addedModalOpen) {
      const timer = setTimeout(() => {
        setAddedModalOpen(false);
      }, 2000); // Auto-close after 2 seconds
  
      return () => clearTimeout(timer);
    }
  }, [addedModalOpen]);
  

  const AddtoCart = (product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    setSelectedProduct(productWithQuantity);
    addToCart(productWithQuantity);
    setAddedModalOpen(true);
  };

  return (
    <div className="seller-area max-w-full object-cover">
      <div className="bestseller">
        <div className='flex-cols items-center bg-darkred p-4 m-4 rounded-lg shadow-lg'>
          <h1 className='text-pink text-5xl text-center font-bold'>
            <span>BestSellers</span>
          </h1>
          <div className='w-28 h-1 bg-pink items-center mx-auto my-2'></div>
        </div>

        {/* Scrollable/Sliding Section */}
        <div
          className="bestseller-scroll flex overflow-x-auto gap-6 py-4 px-2"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",   // 👈 Smooth sliding
            scrollbarWidth: "none"      // 👈 hide scrollbar (Firefox)
          }}
        >
          {productDetails.map(product => (
            <div
              key={product.id}
              className="bestseller-item flex flex-col items-center min-w-[250px] bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300"
              style={{ scrollSnapAlign: "center" }}
            >
              <Link
            to={`/product/${product.id}`}
          >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mb-4 items-center cursor-pointer"
              />
              <h4 className='font-sans font-semibold'>{product.name}</h4>
              <p className='text-slate-400'>{product.description}</p>
              <div className='flex justify-between items-baseline w-40'>
                <div className="flex text-yellow-500 mb-3">
                            {[...Array(4)].map((_, i) => (<FaStar key={i} />))}
                            <FaStarHalfAlt />
                          </div>
                          <span className="font-bold mb-2">${product.price}</span>
              </div>
              </Link>
              <button 
                onClick={() => AddtoCart(product)} 
                className='add-to-cart bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200'
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        <CartModal 
          isOpen={addedModalOpen}
          onRequestClose={() => addedModalOpen(false)}
          modalstyle={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            },
            content: {
              position: 'relative',
              inset: 'auto',
              padding: '0',
              border: 'none',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '50%',
              maxHeight: '300px',
              overflow: 'auto',
            },
          }}
          productName = {selectedProduct ? selectedProduct.name : ''}
        />
      </div>
    </div>
  )
}

export default BestSellers

