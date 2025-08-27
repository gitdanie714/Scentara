import React from 'react'
import "../styles/componentstyle.css"
import img2 from '../images/img2.jpg'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import productimg from '../images/prada.jpeg'
import productDetails from '../constants/ProductDetails';

function ProductInfo() {

  const navigate = useNavigate(); 

  return (

    <div className='bg-white p-4 m-4 rounded-lg shadow-lg w-screen h-auto justify-center items-center'>

      {/* Grid container */}
      <div className='grid grid-cols-5 gap-6 bg-slate-500 p-10'>

        {/* Left side image */}
        <div className='bg-blue-200 bg-opacity-80 p-4 rounded-lg shadow-lg flex items-center justify-center'>
          <img 
            src={productimg} 
            alt="Main Product" 
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* Right side two stacked items */}
        <div className='col-span-2 grid grid-rows-2 gap-6'>

          <div className='bg-darkred bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center'>
            <img 
              src={productimg} 
              alt="Floral Scents" 
              className='w-full h-56 object-cover rounded-md'
            />
            <h1 className="mt-2 text-white font-semibold">Floral Scents</h1>
          </div>

          <div className='bg-darkred bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center'>
            <img 
              src={productimg} 
              alt="Wood Fragrance" 
              className='w-full h-56 object-cover rounded-md'
            />
            <h1 className="mt-2 text-white font-semibold">Wood Fragrance</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductInfo
