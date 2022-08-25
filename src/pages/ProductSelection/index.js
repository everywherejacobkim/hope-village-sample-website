import React from 'react';
import Nav from 'react-bootstrap/Nav';

const ProductPage = () => {
  return (
    <div className="product-page-menu">
      <Nav className="flex-column">
        <div>
          <Nav.Link href="/dogFood">
            <p>Dog Food</p>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/dogTreat">
            <p>Dog Treat</p>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="/dogSupplies">
            <p>Dog Supplies</p>
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default ProductPage;
