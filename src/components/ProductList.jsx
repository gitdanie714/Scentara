import React, { useEffect, useState , useParams } from 'react';
import productDetails from '../constants/ProductDetails';
import ReactModal from 'react-modal';
import { FaAngleLeft, FaAngleRight, FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../constants/CartContext';
import CartModal from './CartModal';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function ProductList() {
  ReactModal.setAppElement('#root');
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct,setSelectedProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // adjust for how many you want visible per page
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productDetails.slice(indexOfFirst, indexOfLast);
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  const { addToCart } = context;
  
  // Auto-close modal
  useEffect(() => {
  if (modalIsOpen) {
    const timer = setTimeout(() => {
      setModalIsOpen(false);
    }, 2000); // Auto-close after 2 seconds

    return () => clearTimeout(timer);
  }
}, [modalIsOpen]);


const handleAddToCart = (product) => {
    setSelectedProduct({ ...product, quantity: 1 });
    addToCart({ ...product, quantity: 1 });
    setModalIsOpen(true);
  };

 
  return (
    <div className="flex flex-col items-center px-6 py-10 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-darkred mb-10 text-center">
        Your Popular Perfume Brands at Affordable Prices
      </h1>

     <div className="bg-pink-100 p-8 rounded-xl  w-full max-w-7xl">

  {/* Pagination at top */}
  <div className="flex justify-end mb-8 gap-4">
    {[1 , 2].map((page) => (
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
    {/* {[<FaAngleLeft/>, <FaAngleRight/>].map((page) => (
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
    ))} */}
  </div>

{/* Product Grid  */}
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {currentProducts.map((product) =>  (
        <div
          key={product.id}
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-200"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border border-pink-200"
            />
            <h4 className="text-lg font-semibold mb-1 text-center w-full">{product.name}</h4>
            <span className="text-pink-600 text-center font-bold mb-3 w-full block">${product.price}</span>
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="flex items-center gap-2 px-4 py-2 bg-darkred text-white rounded-lg hover:bg-hoverdarkred transition"
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  <CartModal 
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          modalstyle={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            },
            content: {
              position: 'relative',
              inset: 'auto',
              padding: '0',
              border: 'none',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '50%',
              maxHeight: '300px',
              overflow: 'auto',
            },
          }}
          productName = {selectedProduct ? selectedProduct.name : ''}
        />
      
    </div>
  );
}

export default  ProductList;
