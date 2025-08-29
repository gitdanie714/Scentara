import React, { useState } from 'react';
import productDetails from '../constants/ProductDetails';
import ReactModal from 'react-modal';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../constants/CartContext';
import { useContext } from 'react';

function ProductDisplay() {
  ReactModal.setAppElement('#root');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8; // adjust for how many you want visible per page
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productDetails.slice(indexOfFirst, indexOfLast);
  const { cart, setCart } = useContext(CartContext);
  // Auto-close modal
  setTimeout(() => {
    if (modalIsOpen) setModalIsOpen(false);
  }, 5000);

  const addToCart =(product) =>{
    setSelectedProduct({ ...product, quantity: 1 });
    setCart([...cart, selectedProduct]);
    setModalIsOpen(true);
  }

  // const AddtoCart = (product) => {
  //   setSelectedProduct({ ...product, quantity: 1 });
  //   setModalIsOpen(true);

  //   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   const existingProduct = cartItems.find(item => item.id === product.id);

  //   if (existingProduct) {
  //     existingProduct.quantity += 1;
  //   } else {
  //     cartItems.push({ ...product, quantity: 1 });
  //   }
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // };

  return (
    <div className="flex flex-col items-center px-6 py-10 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-darkred mb-10 text-center">
        Your Popular Perfume Brands at Affordable Prices
      </h1>

     <div className="bg-pink-100 p-8 rounded-xl  w-full max-w-7xl">

  {/* Pagination at top */}
  <div className="flex justify-end mb-8 gap-4">
    {[1, 2].map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-7 py-2 rounded-3xl font-semibold ${
          currentPage === page
            ? 'bg-darkred text-white'
            : 'bg-white border-darkred border-2 text-darkred hover:bg-gray-100'
        }`}
      >
        {page}
      </button>
    ))}
  </div>

  {/* Product Grid */}
  <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    {currentProducts.map((product) => (
      <div
        key={product.id}
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-200"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover rounded-full mb-4 border border-pink-200"
        />
        <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
        <span className="text-pink-600 font-bold mb-3">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center gap-2 px-4 py-2 bg-darkred text-white rounded-lg hover:bg-opacitydarkred transition"
        >
          <FaCartPlus /> Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

      {/* Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Product Details"
        className="product-modal flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 relative max-w-sm"
        overlayClassName="product-modal-overlay fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
      >
        {selectedProduct && (
          <div className="text-center">
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-pink-600">Added to Cart</h2>
            <p className="text-gray-700">{selectedProduct.name} has been added to your cart.</p>
          </div>
        )}
      </ReactModal>
    </div>
  );
}

export default ProductDisplay;
