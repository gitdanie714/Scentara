import React, { useState } from 'react'
import "../styles/componentstyle.css"
import ReactModal from 'react-modal'
import '../styles/modal.css' 
import { useNavigate } from 'react-router-dom'
import productDetails from '../constants/ProductDetails'
import ProductDescription from '../pages/ProductDescription'
import { FaStar } from "react-icons/fa";

function BestSellers({openCartModal}) {
      const navigate = useNavigate();
  ReactModal.setAppElement('#root') // Set the app element for accessibility

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  setTimeout(() => {
    setModalIsOpen(false)
  },5000);

  const addQuantity = (product) => {
    setSelectedProduct(prev => {
      if (prev && prev.id === product.id) {
        return { ...prev, quantity: prev.quantity + 1 }
      }
      return { ...product, quantity: 1 }
    })
  }

  const removeQuantity = (product) => {
    setSelectedProduct(prev => {
      if (prev && prev.id === product.id && prev.quantity > 0) {
        return { ...prev, quantity: prev.quantity - 1 }
      }
      return { ...product, quantity: 1 }
    })
  }

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
    <div className="seller-area ">
      <div className="bestseller">
        <div className='flex-cols items-center bg-darkred p-4 m-4 rounded-lg shadow-lg'>
          <h1 className='text-pink text-5xl text-center font-bold'><span>BestSellers</span></h1>
          <div className='w-28 h-1 bg-pink items-center mx-auto my-2 '></div>
        </div>
        <div
          className="bestseller-scroll flex overflow-x-auto gap-6 py-4 px-2"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin"
          }}
        >
          {productDetails.map(product => (
            <div
              key={product.id}
              className="bestseller-item flex flex-col items-center min-w-[250px] bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200"
              style={{ scrollSnapAlign: "center" }}
            >
              <img src={product.image} onClick={() => navigate("/product")} alt={product.name} className="w-32 h-32 object-cover rounded-full mb-4 items-center" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
               <div className='flex items-center justify-between w-40'>
                <FaStar className=''/>
                <p>$300.00</p> 
                </div>
              <button onClick={() => AddtoCart(product)} className='add-to-cart bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200'>Add to Cart</button>
            </div>
          ))}
        </div>
        
        <ReactModal 
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Product Details"
          className="product-modal"
          overlayClassName="product-modal-overlay"
        >
          {selectedProduct && (
            <div>
              <button onClick={() => setModalIsOpen(false)}>X</button>
              <h2>Added to Cart</h2>
              <p>{selectedProduct.name} has been added your cart.</p>
            </div>
          )}
        </ReactModal>
      </div>
    </div>
  )
}

export default BestSellers
//Tailwind Version

// import React, { useState } from 'react'
// import "../styles/componentstyle.css"
// import ReactModal from 'react-modal'
// import '../styles/modal.css' 
// import productDetails from '../constants/ProductDetails'

// function BestSellers({openCartModal}) {
//   ReactModal.setAppElement('#root')

//   const [modalIsOpen, setModalIsOpen] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)

//   setTimeout(() => {
//     setModalIsOpen(false)
//   },5000);

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

//   const AddtoCart = (product) => {
//     setSelectedProduct({ ...product, quantity: 1 })
//     setModalIsOpen(true)
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
//     const existingProduct = cartItems.find(item => item.id === product.id)
//     if (existingProduct) {
//       existingProduct.quantity += 1
//     } else {
//       cartItems.push({ ...product, quantity: 1 })
//     }
//     localStorage.setItem('cartItems', JSON.stringify(cartItems))
//   }

//   return (
//     <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
//       <div className="bestseller grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
//         {productDetails.map(product => (
//           <div key={product.id} className="bestseller-item flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200">
//             <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full mb-4" />
//             <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
//             <span className="text-pink-600 font-bold mb-2">${product.price}</span>
//             <button 
//               onClick={() => AddtoCart(product)} 
//               className='add-to-cart bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200'
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
        
//         <ReactModal 
//           isOpen={modalIsOpen}
//           onRequestClose={() => setModalIsOpen(false)}
//           contentLabel="Product Details"
//           className="product-modal flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6"
//           overlayClassName="product-modal-overlay fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
//         >
//           {selectedProduct && (
//             <div className="text-center">
//               <button 
//                 onClick={() => setModalIsOpen(false)} 
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
//               >X</button>
//               <h2 className="text-2xl font-bold mb-2 text-pink-600">Added to Cart</h2>
//               <p className="text-gray-700">{selectedProduct.name} has been added to your cart.</p>
//             </div>
//           )}
//         </ReactModal>
//       </div>
//     </div>
//   )
// }

// export default BestSellers


