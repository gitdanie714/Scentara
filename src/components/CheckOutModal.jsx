import React, { useState } from "react";
import Modal from "react-modal";
import { sendOrderEmail } from "../constants/OrderSummary";
import { PaystackButton } from "react-paystack";


const CheckOutModal = ({ cart, isOpen, onClose, userEmail }) => {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [isSending, setIsSending] = useState(false);
  const [showPayment,setShowPayment] = useState(false);
  const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || "";

  // compute totals
  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const displayTotal = `$${cartTotal.toFixed(2)}`;
  // Paystack expects integer amount (kobo/cents) depending on currency; adjust as needed
  const amount = Math.round(cartTotal * 100);
  console.log("Paystack amount in minor units:", amount);
  const reference = new Date().getTime().toString();

  const componentProps = {
    email: form.email,
    amount,
    metadata: {
      name: form.name,
      custom_fields: [
        { display_name: "Order ID", variable_name: "order_id", value: reference },
      ],
    },
    publicKey: paystackPublicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      console.log("Payment successful:", response);
      alert("Payment successful!");
      // Optionally send `response.reference` to backend for verification
    },
    onClose: () => alert("Payment window closed."),
  };

  const handleCheckout = async (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

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
      alert("Order placed successfully! Please proceed to payment.");
      setShowPayment(true);
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
                {i.name} <span className="text-gray-500">(x{i.quantity})</span> -{" "}
                <span className="font-medium">${(i.price * i.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold text-[#66021f] text-right text-lg">{displayTotal}</p>
        </div>
        {/* Form */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB]"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB]"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Shipping Address"
          rows={3}
          value={form.address}
          className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66021f] focus:outline-none bg-[#FFF9FB] resize-none"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        {/* Action Buttons */}
        {!showPayment ? (
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
        ) : (
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                // allow user to go back to edit details before paying
                setShowPayment(false);
              }}
              type="button"
              className="w-1/2 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition duration-200"
            >
              Back
            </button>
             <div className="w-1/2">
              {/* PaystackButton opens the Paystack checkout window */}
              <PaystackButton {...componentProps}  />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default CheckOutModal;
