import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import { CartContext } from '../constants/CartContext'; // Adjust path as needed

ReactModal.setAppElement('#root');

function CartModal({
  isOpen,
  onRequestClose,
  productName,
  modalstyle
}) {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalstyle}
      contentLabel="Added to Cart"
    >
      <div className="bg-white rounded-xl shadow-xl p-6 min-w-[300px] relative">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          ×
        </button>

        <div className="flex flex-col items-center space-y-4 pt-2">
          <div className="text-green-500 text-5xl">✔</div>
          <h2 className="text-xl font-semibold text-gray-800">{productName} added to cart</h2>
          <button
            onClick={onRequestClose}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-200 mt-2 w-full sm:w-auto"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default CartModal;
