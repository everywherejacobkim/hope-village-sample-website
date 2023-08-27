import React from 'react';
import Nav from 'react-bootstrap/Nav';

const ProductPage = () => {
  return (
    <div className="product-page-menu">
      <Nav className="flex-column">
        <div>
          <Nav.Link href="/productOil">
            <p>기름류</p>
            <h1 className="text-lg text-lime-700 font-bold">Oil Products</h1>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/productSeasonal">
            <p>계절 특산품</p>
            <h1 className="text-lg text-lime-700 font-bold">Seasonal Products</h1>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/productEtc">
            <p>기타 상품</p>
            <h1 className="text-lg text-lime-700 font-bold">Other Products</h1>
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default ProductPage;
