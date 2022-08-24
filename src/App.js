import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import productData from './data';

function App() {
  let [product, setProduct] = useState(productData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <MainBg />
              <ProductGrids />
            </>
          }
        />
        <Route path="/product" element={<div>Select your product</div>} />
        <Route path="/dogFood" element={<div>Hello this is dogFood</div>} />
        <Route path="/dogTreat" element={<div>HI this is dog Treat</div>} />
        <Route path="/dogSupplies" element={<div>Heeeee this is S</div>} />
        <Route path="/cart" element={<div>Cart is on...</div>} />
      </Routes>
    </div>
  );
}

export default App;
