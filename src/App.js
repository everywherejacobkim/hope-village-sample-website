import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import productData from './data';
import MainCarousel from './components/Carousel/index';

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
              <MainCarousel />
              <ProductGrids />
            </>
          }
        />
        <Route path="/product" element={<NavBar />} />
        <Route path="/dogFood" element={<NavBar />} />
        <Route path="/dogTreat" element={<NavBar />} />
        <Route path="/dogSupplies" element={<NavBar />} />
        <Route path="/cart" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
