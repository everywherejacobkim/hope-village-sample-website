import React from 'react';
import Nav from 'react-bootstrap/Nav';

const ProductPage = () => {
  return (
    <div className="product-page-menu">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/dogFood">
          <p>Dog Food</p>
        </Nav.Link>
        <Nav.Link href="/dogTreat" eventKey="link-1">
          <p>Dog Treat</p>
        </Nav.Link>
        <Nav.Link href="/dogSupplies" eventKey="link-2">
          <p>Dog Supplies</p>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default ProductPage;
