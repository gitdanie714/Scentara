import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { IoWaterOutline, IoInformationCircleOutline, IoLeafOutline } from 'react-icons/io5';
import productDetails from '../constants/ProductDetails';
import { CartContext } from '../constants/CartContext';
import CartModal from '../components/CartModal';

function ProductDescription() {
  const { addToCart } = React.useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productDetails.find(p => p.id === parseInt(id));
  
  // Initialize selectedProduct with product and quantity of 1
  const [selectedProduct, setSelectedProduct] = React.useState(
    product ? { ...product, quantity: 1, selectedSize: product.sizes ? product.sizes[0] : null } : null
  );

  // State for managing the currently displayed main image
  const [mainImage, setMainImage] = React.useState(product?.image);
  
  // Array of additional product images (you can replace these with actual additional images)
  const productImages = [
    product?.image,
    '/images/perfimg.webp',
    '/images/prada.jpeg',
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };
  // Handle loading and error states
  if (!product) {
    return <h2 className="text-center text-red-500 mt-10 text-xl">Product not found</h2>;
  }

  // Handle quantity increment
  const addQuantity = (product) => {
    setSelectedProduct(prev => {
      if (!prev) return { ...product, quantity: 1 };
      return { ...prev, quantity: prev.quantity + 1 };
    });
  };

  // Handle quantity decrement with minimum quantity validation
  const removeQuantity = (product) => {
    setSelectedProduct(prev => {
      if (!prev) return { ...product, quantity: 1 };
      const newQuantity = Math.max(1, prev.quantity - 1); // Ensure quantity doesn't go below 1
      return { ...prev, quantity: newQuantity };
    });
  };

  // Handle adding product to cart with validation
  const handleAddToCart = () => {
    if (!selectedProduct || selectedProduct.quantity < 1) {
      return;
    }
    addToCart(selectedProduct);
    setModalIsOpen(true);

  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Back Button */}
      {/* ... */}

      {/* Product Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="flex flex-col space-y-0">
          {/* Main Image */}
          <div className="flex justify-center items-center bg-white rounded-none">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full max-w-lg h-[350px] object-contain transition-all duration-300 ease-in-out"
            />
          </div>
          
          {/* Additional Images Gallery */}
          <div className="grid grid-cols-3 gap-0 bg-white">
            {productImages.map((img, index) => (
              <div 
                key={index}
                className={`aspect-square overflow-hidden hover:opacity-80 transition-all duration-300 cursor-pointer ${mainImage === img ? 'ring-1 ring-darkred' : ''}`}
                onClick={() => handleThumbnailClick(img)}
              >
                <img
                  src={img}
                  alt={`${product.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center bg-pink p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="flex items-center mb-2 bg-opacitydarkred border-2 border-darkred justify-center rounded-full px-2 py-0.5 w-fit text-xs">
            <p className="font-semibold text-darkred m-1">{product.category}</p>
          </div>
          {/* Review Stars beside category */}
          <div className="flex items-center mb-2 ml-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="gold"
                viewBox="0 0 20 20"
              >
                
              </svg>
            ))}
          </div>
          <p className="text-gray-600 mb-6">{product.scentDescription}</p>
          <div className='flex items-center gap-6 mb-4'></div>
          <span className="text-2xl font-semibold text-pink-600 mb-6">
            ${product.price}
          </span>
          {/* Quantity Selector and Add to Cart Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            {/* Fixed-width Quantity Selector */}
            <div className="flex items-center border border-darkred w-[150px] justify-between rounded-full p-1">
              <button
                onClick={() => removeQuantity(product)}
                className="w-10 h-10 flex items-center justify-center hover:bg-rose-300 rounded-full text-lg"
              >
                -
              </button>
              <span className="text-lg font-medium w-10 text-center">{selectedProduct?.quantity || 1}</span>
              <button
                onClick={() => addQuantity(product)}
                className="w-10 h-10 flex items-center justify-center hover:bg-rose-300 rounded-full text-lg"
              >
                +
              </button>
            </div>

            {/* Fixed-width Add to Cart Button */}
            <button 
              className="w-[200px] h-[50px] bg-darkred text-white font-semibold rounded-full shadow hover:bg-hoverdarkred transition flex items-center justify-center" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
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

export default ProductDescription;
