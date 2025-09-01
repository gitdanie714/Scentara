import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import productDetails from '../constants/ProductDetails';

function ProductDescription() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productDetails.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10 text-xl">Product not found</h2>;
  }

 
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

  return (
    <div className="max-w-6xl mx-left p-6  bg-gray-50 w-full min-h-screen ">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-700 hover:text-pink-600 mb-6"
      >
        <FaArrowLeft /> <span>Back to Products</span>
      </button>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  bg-pink shadow-lg rounded-xl p-6">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center bg-pink p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className='flex items-center  mb-2 bg-pink border-spacing-2 border-2 border-darkred w-auto justify-center rounded-full p-1'>
          <p className="text-sm font-semibold text-darkred m-2">{product.category}</p>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <span className="text-2xl font-semibold text-pink-600 mb-6">
            ${product.price}
          </span>

          <button className="px-6 py-3 bg-darkred text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
