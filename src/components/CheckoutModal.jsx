import React, { useState } from "react";
import Modal from "react-modal";
import { sendOrderEmail } from "../constants/OrderSummary";



const CheckOutModal = ({ cart, isOpen, onClose }) => {
const [form, setForm] = useState({ name: "", email: "", address: "" });
const [isSending, setIsSending] = useState(false);

  const handleCheckout = async () => {
    // basic client-side validation
    if (!form.name || !form.email || !form.address) {
      alert("Please fill out name, email and address.");
      return;
    }

    const orderSummary = {
      name: form.name,
      email: form.email,
      address: form.address,
    };

    try {
      setIsSending(true);
      await sendOrderEmail(orderSummary, cart);
      onClose();
    } catch (err) {
      console.error("Failed to send order email", err);
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="flex items-center justify-center min-h-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      ariaHideApp={false}
    >
      <div className="relative bg-[#FFF9FB] max-w-lg w-full rounded-xl shadow-2xl p-8 m-4">
        {/* Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
        >
          ×
        </button>
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-[#66021f] mb-6 tracking-tight">
          🛒 Checkout
        </h2>
        {/* Order Summary */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6 shadow-sm">
          <p className="font-semibold text-[#66021f] mb-2">Order Summary:</p>
          <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
            {cart.map((i, idx) => (
              <li key={idx}>
                {i.name} <span className="text-gray-500">(x{i.quantity})</span> - <span className="font-medium">${i.price * i.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold text-[#66021f] text-right text-lg">
            Total: ${cart.reduce((s, i) => s + i.price * i.quantity, 0)}
          </p>
        </div>
        {/* Form */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB]"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB]"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Shipping Address"
          rows={3}
          className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB] resize-none"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            type="button"
            className="w-1/2 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition duration-200"
            disabled={isSending}
          >
            Cancel
          </button>
          <button
            onClick={handleCheckout}
            disabled={isSending}
            className="w-1/2 py-3 bg-[#66021f] text-[#FFF9FB] font-semibold rounded-lg shadow hover:bg-[#440116] transition duration-200 disabled:opacity-60"
          >
            {isSending ? "Processing..." : "Confirm Order"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default CheckOutModal;