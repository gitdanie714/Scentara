import React, { useContext, useState } from "react";
import { CartContext } from "../constants/CartContext";
import paymentOptions from "../constants/PaymentOptions";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "../components/CheckOutModal";

function ShopCart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [isCheckoutModal, setCheckoutModal] = useState(false);

  
  // calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-0 md:p-0 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50 min-h-screen">
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button
            className="bg-darkred text-white px-6 py-3 rounded-xl hover:bg-opacitydarkred transition-all duration-200"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-1">
            {/* Cart Items with Total */}
            <div className="bg-white rounded-xl shadow-md m-2 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-darkred">Shopping Cart</h2>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Amount:</p>
                    <p className="text-2xl font-bold text-darkred">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 flex items-center hover:bg-gray-50 transition-colors">
                    <div className="flex gap-6 items-center flex-1">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold text-darkred">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price} each</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                        <button 
                          className="text-darkred hover:text-red-700 px-2"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          className="text-darkred hover:text-red-700 px-2"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-gray-900 w-24 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

              </div>
              <div className="p-4 flex justify-between items-center bg-gray-50">
                <button
                  oonClick={() => navigate("/")}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-all duration-200"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => setCheckoutModal(true)}
                  className="bg-darkred text-white px-6 py-3 rounded-xl hover:bg-opacitydarkred transition-all duration-200"
                >
                  CheckOut
                </button>
              </div>
            </div>
          
              
            
          </div>
        </>
      )}
      <CheckoutModal cart={cart} isOpen={isCheckoutModal} onClose={() => setCheckoutModal(false)} />

    </div>

    
  );
}

export default ShopCart;
