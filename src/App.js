import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ShopCart from './pages/ShopCart';
import React from 'react';
import ProductDescription from './pages/ProductDescription';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductDescription />} />
        <Route path="/checkout" element={<ShopCart />} /> 
      </Routes>
    </Router>
  );
}


export default App;
