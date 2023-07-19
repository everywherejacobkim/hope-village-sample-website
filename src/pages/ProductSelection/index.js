import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BsDot } from 'react-icons/bs';

const ProductPage = () => {
  return (
    <div className="product-page-menu">
      <Nav className="flex-column">
        <div>
          <Nav.Link href="/dogFood">
            <p>
              참기름
              <BsDot />
              들기름
            </p>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/dogTreat">
            <p>계절 특산품</p>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/dogSupplies">
            <p>기타 상품</p>
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default ProductPage;
