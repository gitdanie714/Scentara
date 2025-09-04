import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

  // Load cart from localStorage when app starts
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      localStorage.removeItem('cartItems'); // Clear invalid data
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (cart.length > 0) {
        localStorage.setItem('cartItems', JSON.stringify(cart));
        // Verify the save worked
        const saved = localStorage.getItem('cartItems');
        if (!saved) {
          console.error('Failed to save cart to localStorage');
        }
      } else {
        localStorage.removeItem('cartItems');
      }
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

    //Add to cart function
    const addToCart = (product) => {
        if (!product || !product.id) {
            console.error('Invalid product:', product);
            return;
        }
        
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            const newCart = existingProduct
                ? prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                    )
                : [...prevCart, { ...product, quantity: product.quantity || 1 }];
            
            try {
                // Immediately verify the cart update
                localStorage.setItem('cartItems', JSON.stringify(newCart));
            } catch (error) {
                console.error('Error updating cart:', error);
            }
            
            return newCart;
        });
    };

    //Remove from cart function
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Clear cart function
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,  }}>
            {children}
        </CartContext.Provider>

    );

}