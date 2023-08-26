import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiTwotoneStar } from 'react-icons/ai';

export const NavBar = () => {
  return (
    <div className="navBar pl-20 pt-8">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <div className="flex items-center">
              <AiTwotoneStar
                size={34}
                style={{
                  marginTop: 1,
                  marginRight: 1.5,
                  color: '#80b918',
                  transform: 'rotate(-15deg)'
                }}
              />
              <h2 style={{ fontFamily: 'Gugi', fontWeight: 400 }}>희망마을</h2>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto flex gap-4">
            <Nav.Link href="/aboutUs">
              <div>
                <h3>소개</h3>
                <p className="text-xs">About Us</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/product">
              <div>
                <h3>카테고리</h3>
                <p className="text-xs">Products</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/cart">
              <div>
                <h3>주문</h3>
                <p className="text-xs">How to Order</p>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
