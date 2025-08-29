import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ShopCart from './pages/ShopCart';
import React from 'react';
import { CartProvider } from './constants/CartContext';
import ProductDescription from './pages/ProductDescription';
function App() {
  return (
    <Router>
  <CartProvider>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductDescription />} />
      <Route path="/checkout" element={<ShopCart />} />
    </Routes>
  </CartProvider>
</Router>
  );
}


export default App;
