import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="product-page-menu">
      <Nav className="flex-column">
        <div>
          <Link to="/productOil">
            <p>기름류</p>
            <h1 className="text-lg text-lime-700 font-bold">Oil Products</h1>
          </Link>
        </div>
        <div>
          <Link to="/productSeasonal">
            <p>계절 특산품</p>
            <h1 className="text-lg text-lime-700 font-bold">Seasonal Products</h1>
          </Link>
        </div>
        <div>
          <Link to="/productEtc">
            <p>기타 상품</p>
            <h1 className="text-lg text-lime-700 font-bold">Other Products</h1>
          </Link>
        </div>
      </Nav>
    </div>
  );
};

export default ProductPage;
