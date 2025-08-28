import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import reviewpic from "../images/girl.png";

function Reviews() {
  return (
    <div className="bg-pink py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-darkred">
        Customer Reviews
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Review Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <img 
            src={reviewpic} 
            alt="Customer" 
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 mb-4"
          />
          <div className="flex text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => (<FaStar key={i} />))}
          </div>
          <p className="text-gray-600 italic mb-3">
            <ImQuotesLeft className="inline text-xl text-darkred mr-1" />
            Amazing products! My hair feels so much healthier.
          </p>
          <span className="font-semibold text-gray-800">- Jane D.</span>
        </div>

        {/* Review Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <img 
            src={reviewpic} 
            alt="Customer" 
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 mb-4"
          />
          <div className="flex text-yellow-500 mb-3">
            {[...Array(4)].map((_, i) => (<FaStar key={i} />))}
            <FaRegStar />
          </div>
          <p className="text-gray-600 italic mb-3">
            <ImQuotesLeft className="inline text-xl text-darkred mr-1" />
            Great customer service and fast delivery. Highly recommend!
          </p>
          <span className="font-semibold text-gray-800">- Mark T.</span>
        </div>

        {/* Review Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <img 
            src={reviewpic} 
            alt="Customer" 
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 mb-4"
          />
          <div className="flex text-yellow-500 mb-3">
            {[...Array(4)].map((_, i) => (<FaStar key={i} />))}
            <FaStarHalfAlt />
          </div>
          <p className="text-gray-600 italic mb-3">
            <ImQuotesLeft className="inline text-xl text-darkred mr-1" />
            The best natural hair care I've tried so far.
          </p>
          <span className="font-semibold text-gray-800">- Aisha K.</span>
        </div>

      </div>
    </div>
  )
}

export default Reviews
