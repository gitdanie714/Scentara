import React, { useContext } from "react";
import { CartContext } from "../constants/CartContext"; // adjust the path
import { useNavigate } from "react-router-dom";

function ShopCart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-darkred">Your Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button
            className="bg-darkred text-white px-4 py-2 rounded-md hover:bg-red-700 shadow"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-4  bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition"
                style={{ borderLeft: "6px solid darkred"}}
              >
                <div className="flex-grow">
                  <p className="font-semibold text-lg text-darkred">{item.name}</p>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                    <span className="text-gray-700 mr-2">Qty:</span>
                    <div className="flex items-center space-x-3">
                      <button className="text-darkred hover:text-red-700 font-bold px-2">
                        -
                      </button>
                      <span className="text-lg font-semibold min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button className="text-darkred hover:text-red-700 font-bold px-2">
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-lg text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg border border-red-100">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold text-darkred">
                Subtotal:
              </p>
              <p className="text-xl text-darkred font-bold">
                ${total.toFixed(2)}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <p className="text-lg font-semibold mb-3 text-darkred">Payment Method</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="card" name="payment" className="mr-2 accent-darkred" defaultChecked />
                  <label htmlFor="card" className="flex items-center gap-2">
                    Credit/Debit Card
                    <span className="text-gray-500 text-sm">(Visa, Mastercard, etc.)</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="paypal" name="payment" className="mr-2 accent-yellow-600" />
                  <label htmlFor="paypal">PayPal</label>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 px-4 py-3 rounded-md hover:bg-gray-300 font-semibold text-darkred border border-gray-300"
              >
                Clear Cart
              </button>
              <button
                className="flex-1 bg-darkred text-white px-6 py-3 rounded-md hover:bg-opacitydarkred transition"
                onClick={() => alert("Proceeding to payment...")}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShopCart;
