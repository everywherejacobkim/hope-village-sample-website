import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiTwotoneStar } from 'react-icons/ai';

export const NavBar = () => {
  return (
    <div className="navBar">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <div style={{ display: 'flex' }}>
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
          <Nav className="me-auto">
            <Nav.Link href="/">소개</Nav.Link>
            <Nav.Link href="/product">상품카테고리</Nav.Link>
            <Nav.Link href="/cart">카트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
