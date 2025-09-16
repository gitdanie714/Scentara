import ReactModal from 'react-modal';
import { useContext } from 'react';
import { CartContext } from '../constants/CartContext';

function CartModal({ modalState, onRequestClose, className, overlayClassName, contentLabel }) {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  const { cart, removeFromCart } = context;

  if(!modalState) {
    return null;
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={onRequestClose}
      className={className}
      overlayClassName={overlayClassName}
      contentLabel="Shopping Cart"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-pink-600">${item.price * item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </ReactModal>
  );
}

export default CartModal;