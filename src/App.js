import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import MainCarousel from './components/Carousel/index';
import '@fontsource/ubuntu';
import ProductPage from './pages/ProductSelection';
import DogFood from './pages/DogFood';

function App() {
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
              <div style={{ marginTop: 200, marginBottom: 20 }}>
                © 2022 Jacob Namhyung Kim. All Rights Reserved
              </div>
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <NavBar />
              <ProductPage />
            </>
          }
        />
        <Route
          path="/dogFood"
          element={
            <>
              <NavBar />
              <DogFood />
            </>
          }
        />
        <Route path="/dogTreat" element={<NavBar />} />
        <Route path="/dogSupplies" element={<NavBar />} />
        <Route path="/cart" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
