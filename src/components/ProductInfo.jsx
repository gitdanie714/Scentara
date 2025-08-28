import React from 'react'
import productimg from '../images/prada.jpeg'

function ProductInfo() {
  return (
    <div className="bg-white p-6 m-6 ">
      
      {/* Grid container */}
      <div className="grid grid-cols-3 gap-6 bg-pink p-6 rounded-lg">

        {/* Left main product image */}
        <div className="bg-pink bg-opacity-80 rounded-lg shadow-lg flex items-center justify-center">
          <img 
            src={productimg} 
            alt="Main Product" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right categories (two stacked) */}
        <div className="col-span-2 grid grid-rows-2 gap-6">

          {/* Category card */}
          <div className=" bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer">
            <img 
              src={productimg} 
              alt="Floral Scents" 
              className="w-full h-56 object-cover rounded-md"
            />
            <h1 className="mt-2 text-white font-semibold">Floral Scents</h1>

            {/* Hover explanation */}
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-center px-4">
                Fresh floral fragrances perfect for everyday elegance.
              </p>
            </div>
          </div>

          {/* Second category card */}
          <div className=" bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer">
            <img 
              src={productimg} 
              alt="Wood Fragrance" 
              className="w-full h-56 object-cover rounded-md"
            />
            <h1 className="mt-2 text-white font-semibold">Wood Fragrance</h1>

            {/* Hover explanation */}
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-center px-4">
                Rich woody tones that embody warmth and sophistication.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductInfo
