import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '@fontsource/ubuntu';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import MainCarousel from './components/Carousel/index';
import ProductPage from './pages/ProductSelection';
import DogFood from './pages/DogFood';
import DogTreat from './pages/DogTreat';
import DogSupplies from './pages/DogSupplies';
import Review from './components/Review/index';

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
              <Review />
              <div style={{ marginTop: 100, marginBottom: 20 }}>
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
        <Route
          path="/dogTreat"
          element={
            <>
              <NavBar />
              <DogTreat />
            </>
          }
        />
        <Route
          path="/dogSupplies"
          element={
            <>
              <NavBar />
              <DogSupplies />
            </>
          }
        />
        <Route path="/cart" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
