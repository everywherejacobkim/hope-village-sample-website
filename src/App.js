import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@fontsource/ubuntu';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import MainCarousel from './components/Carousel/index';
import ProductPage from './pages/ProductSelection';
import DogFood from './pages/ProductOil';
import DogTreat from './pages/ProductSeasonal';
import DogSupplies from './pages/ProductEtc';
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
                © 2022 영농법인 희망마을 All Rights Reserved &nbsp;
                <a href="https://www.freepik.com/free-vector/illustrated-colorful-countryside-landscape_9989008.htm#query=village&position=0&from_view=search">
                  Freepik
                </a>
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
