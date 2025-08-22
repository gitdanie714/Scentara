import React from 'react'
import "../styles/componentstyle.css"
import logo from "../images/img1.png"
function Header() {
  return (
    <div className='flex justify-between items-center min-h-96 bg-pink p-4'>
      <div className='flex-col justify-center items-start text-left '>
        <h1 className='text-pink-500 text-7xl text-left font-semibold m-2'>Choose your Signature Scent </h1>
        <p className='w-auto p-2 m-4 text-left text-lg text-black-300'>Your one-stop destination for all things floral
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. 
        </p>
        <button className='bg-darkred w-auto h-auto p-4 m-4 text-white rounded-xl'>Shop Now</button>
        </div>
        <div className='header-image'>
          <img src={logo} alt='Floral Header' className='w-96 h-auto flex items-center justify-center '/>
        </div>

    
    </div>
  )
}

export default Header