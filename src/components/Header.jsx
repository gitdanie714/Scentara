import React from 'react'
import "../styles/componentstyle.css"
import logo from "../images/img1.png"
import { IoIosArrowRoundForward } from "react-icons/io"
function Header() {
  return (
    <div className='w-full bg-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between min-h-[600px] px-4 md:px-8'>
        <div className='flex-1 flex flex-col justify-center items-start text-left md:pr-8'>
          <h1 className='text-darkred text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 '>
            Choose your Signature Scent
          </h1>
          <p className='text-gray-700 text-base md:text-lg mb-8 w-full'>
            Your one-stop destination for all things floral.
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit.
          </p>
          <button className='bg-darkred px-7 py-3 text-white text-lg rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2'>
            Explore the Scent
            <IoIosArrowRoundForward className='text-4xl' />
          </button>
        </div>
        <div className='flex-1 flex justify-center items-center mt-8 md:mt-0'>
          <img 
            src={logo} 
            alt='Floral Header' 
            className='w-full h-auto max-h-[500px] object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Header