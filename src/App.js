import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@fontsource/ubuntu';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';
import MainCarousel from './components/Carousel/index';
import ProductPage from './pages/ProductSelection';
import ProductOil from './pages/ProductOil';
import ProductSeasonal from './pages/ProductSeasonal';
import ProductEtc from './pages/ProductEtc';
import Review from './components/Review/index';
import AboutUs from './pages/AboutUs/AboutUs';

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
                © 2022 devjacobkim.co All Rights Reserved &nbsp;
                <a href="https://www.freepik.com/free-vector/illustrated-colorful-countryside-landscape_9989008.htm#query=village&position=0&from_view=search">
                  Freepik
                </a>
              </div>
            </>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <>
              <NavBar />
              <AboutUs />
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
          path="/productOil"
          element={
            <>
              <NavBar />
              <ProductOil />
            </>
          }
        />
        <Route
          path="/productSeasonal"
          element={
            <>
              <NavBar />
              <ProductSeasonal />
            </>
          }
        />
        <Route
          path="/productEtc"
          element={
            <>
              <NavBar />
              <ProductEtc />
            </>
          }
        />
        <Route path="/howToOrder" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
