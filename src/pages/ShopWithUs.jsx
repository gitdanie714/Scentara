import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShopWithUs() {
  const navigate = useNavigate();

  return (
    <div>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Coming Soon!</p>
          <button
            className="bg-darkred text-white px-6 py-3 rounded-xl hover:bg-hoverdarkred transition-all duration-200"
            onClick={() => navigate("/")}
          >
           Back to Home
          </button>
        </div>

    </div>
  )
}

export default ShopWithUs