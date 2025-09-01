import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ShopCart from './pages/ShopCart';
import { CartProvider } from './constants/CartContext';
import ProductDescription from './pages/ProductDescription';
import Navbar from './components/Navbar';  // ✅ import Navbar

function App() {
  return (
    <Router>
      <CartProvider>
        {/* ✅ Navbar is outside Routes so it shows on every page */}
        <Navbar />  
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/checkout" element={<ShopCart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
