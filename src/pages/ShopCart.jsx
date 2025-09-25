import React, { useContext, useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaApplePay } from "react-icons/fa";
import { CartContext } from "../constants/CartContext";
import { useNavigate } from "react-router-dom";

function ShopCart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const paymentOptions = [
    {
      id: "cards",
      label: "Credit/Debit Cards",
      icons: [
        <FaCcVisa key="visa" size={32} className="text-blue-700" />,
        <FaCcMastercard key="mastercard" size={32} className="text-red-500" />
      ]
    },
    { 
      id: "paypal", 
      label: "PayPal",
      icon: <FaPaypal size={32} className="text-blue-600" />
    }
  ];

  // calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50 min-h-screen">
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
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cart Items with Total */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-red-100">
              <h2 className="text-xl font-semibold mb-4 text-darkred">Select Payment Method</h2>
              <div className="space-y-3">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200
                      ${selectedOption === option.id 
                        ? "border-darkred bg-rose-50" 
                        : "border-gray-200 hover:border-red-200 hover:bg-rose-50/50"}`}
                  >
                    <div className="flex items-center gap-2">
                      {option.icons ? (
                        <div className="flex items-center gap-1">
                          {option.icons.map((icon, index) => (
                            <span key={index}>{icon}</span>
                          ))}
                        </div>
                      ) : (
                        option.icon
                      )}
                    </div>
                    <span className="font-medium text-gray-700">{option.label}</span>
                  </button>
                ))}
              </div>

              {selectedOption && (
                <div className="mt-6 text-sm text-gray-600">
                  Selected payment method:{" "}
                  <span className="font-semibold text-darkred capitalize">{selectedOption}</span>
                </div>
              )}

              <button 
                className="mt-6 w-full bg-darkred text-white py-4 rounded-xl hover:bg-opacitydarkred transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                onClick={() => {
                  if (!selectedOption) {
                    alert("Please select a payment method");
                    return;
                  }
                  // Handle payment completion
                  alert(`Processing payment with ${selectedOption}...`);
                  clearCart(); // Clear the cart after successful payment
                  navigate("/"); // Redirect to home page
                }}
              >
                Pay ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShopCart;
