import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import productDetails from '../constants/ProductDetails';
import { CartContext } from '../constants/CartContext';

function ProductDescription() {
  const { addToCart } = React.useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productDetails.find(p => p.id === parseInt(id));
  
  // Initialize selectedProduct with product and quantity of 1
  const [selectedProduct, setSelectedProduct] = React.useState(
    product ? { ...product, quantity: 1 } : null
  );

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
  };

  return (
    <div className="max-w-6xl mx-left p-6  bg-gray-50 w-full min-h-screen ">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-700 hover:text-pink-600 mb-6"
      >
        <FaArrowLeft /> <span>Back to Products</span>
      </button>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  bg-pink shadow-lg rounded-xl p-6">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center bg-pink p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className='flex items-center  mb-2 bg-pink border-2 border-darkred w-auto justify-center rounded-full p-1'>
          <p className="text-sm font-semibold text-darkred m-2">{product.category}</p>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <span className="text-2xl font-semibold text-pink-600 mb-6">
            ${product.price}
          </span>
            {/* Quantity Selector - Uncomment if needed */}
             <div className="flex items-center mb-6 space-x-4 border-2 border-darkred w-1/3 justify-center rounded-full p-1">
              <button
                onClick={() => removeQuantity(product)}
                className="px-3 py-1 hover:bg-rose-300 rounded text-lg "
              >
                -
              </button>
              <span className="text-lg">{selectedProduct?.quantity || 1}</span>
              <button
                onClick={() => addQuantity(product)}
                className="px-3 py-1 hover:bg-rose-300 rounded text-lg"
              >
                +
              </button>
            </div> 

          <button className="px-6 py-3 bg-darkred text-white font-semibold rounded-lg shadow hover:bg-opacitydarkred transition" 
          onClick={handleAddToCart}
>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
