import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function ShopCart() {
    const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);


  return (
    <div className="container mx-auto p-5">
      <h1 className="text-lg font-semibold text-blue-500">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-2xl">
          Your cart is currently empty. Please add items to your cart.
        </p>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <section className="bg-blue p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Your Cart Items</h2>
            <ul className="space-y-4">
              {cart
                .filter((item) => item) // skip null entries
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <span>
                      {item.name} - ${item.price} x {item.quantity}
                    </span>
                    <span>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
